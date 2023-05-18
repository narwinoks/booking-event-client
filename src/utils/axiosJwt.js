import axios from "axios";
import axiosJwt from "axios-jwt";

export const axiosJwt = axiosJwt(
  axios.create({
    baseURL: "http://localhost:3000/api/",
    headers: {
      "Content-type": "application/json",
    },
    withCredentials: true,
  })
);

axiosJwt.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
