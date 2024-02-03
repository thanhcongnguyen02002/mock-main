// axiosClient.js
import axios from "axios";
import { getAcessToken } from "../utils/helper";
const instance = axios.create({
  baseURL: "https://65b74f5446324d531d543d91.mockapi.io/api/v1/user/", // base URL
  timeout: 5000, // thời gian hết hạn call API
  headers: { "Content-Type": "application/json" },
});

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("access-token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default instance;
