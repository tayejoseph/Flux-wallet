import axios from "axios";
import Cookies from "js-cookie";
import { notify } from "react-notify-toast";

import NProgress from "../nprogress";

const server = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

server.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  NProgress.start();
  return config;
});

server.interceptors.response.use(
  (response) => {
    NProgress.done();

    return response;
  },
  (err) => {
    if (err.response.status === 401) {
      Cookies.remove("token");
      notify.show("Your Session has Expired kinding Login again", "warning");
      localStorage.clear();
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
    NProgress.done();
    return Promise.reject(err);
  }
);

export default server;
