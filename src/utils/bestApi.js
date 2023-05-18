import axios from "axios";
export const bestApi = axios.create();

// Request interceptor for API calls
bestApi.interceptors.request.use(
  async (config) => {
    const accessToken = getAccessToken();
    config.headers = {
      Authorization: `${accessToken}`,
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
bestApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    console.log(error);
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = await refreshAccessToken();
      axios.defaults.headers.common["Authorization"] = access_token;
      return bestApi(originalRequest);
    }
    return Promise.reject(error);
  }
);

const refreshAccessToken = () => {
  return axios
    .get("http://ticket.tes/api/V1/auth/refresh-token", {
      refresh_token: getRefreshToken(), // Replace with your refresh token retrieval logic
    })
    .then((response) => {
      const newAccessToken = response.data.access_token;
      setAccessToken(newAccessToken); // Replace with your access token storage logic
      return newAccessToken;
    })
    .catch((error) => {
      // Handle the token refresh error
      console.error("Token refresh failed:", error);
      // Redirect to login or perform other error handling
      throw error;
    });
};
const getRefreshToken = () => {
  const refreshToken = localStorage.getItem("refreshToken");
  return refreshToken;
};
const getAccessToken = () => {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken;
};

const setAccessToken = (token) => {
  localStorage.setItem("accessToken", token);
};
