/**
axios 实例
 */

import axios from "axios";

const clientBaseURL = "/";
const serverBaseURL = "http://localhost:4399";

/**
client axios config
 */
export const clientAxios = axios.create({
  baseURL: clientBaseURL
});

// Add a request interceptor
clientAxios.interceptors.request.use(
  config => {
    // Do something before request is sent
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
clientAxios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

