import axios from "axios";
import jwtDecode from "jwt-decode";
import { server } from "../server/server";

const axiosApiInstance = axios.create({
  baseURL: server,
});
// Function to refresh the access token
const refreshAccessToken = async () => {
  try {
    const refreshToken = getRefreshToken();
    const decode = jwtDecode(refreshToken);
    const response = await axios.get(`${server}/auth/refresh-token`, {
      headers: {
        Authorization: `${refreshToken}`,
        "Content-Type": "application/json",
      },
    });
    const newAccessToken = response.data.data.token;
    // Store the new access token in your preferred storage (e.g., local storage)
    localStorage.setItem("accessToken", newAccessToken);
    return newAccessToken;
  } catch (error) {
    // Handle the token refresh error
    console.error("Token refresh failed:", error);
    // Redirect to login or perform other error handling
    throw error;
  }
};

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken");
    config.headers = {
      Authorization: `${accessToken}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const accessToken = await refreshAccessToken();
        originalRequest.headers.Authorization = `${accessToken}`;
        return axiosApiInstance(originalRequest);
      } catch (error) {
        // Handle the failed token refresh or redirection to login
        console.error("Failed to refresh token or redirect to login:", error);
        throw error;
      }
    }
    return Promise.reject(error);
  }
);

const getRefreshToken = () => {
  const refreshToken = localStorage.getItem("refreshToken");
  console.log(jwtDecode(refreshToken));
  return refreshToken;
};

export default axiosApiInstance;
