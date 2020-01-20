// 服务器渲染时 页面请求
import axios from "axios";

const targetServer = "http://localhost:4399";

const options = {
  baseURL: targetServer
}

export function createServerRequest(params) {
    return axios.create(options);
}
