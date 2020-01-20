// 服务端 主文件
import { matchRoutes, renderRoutes } from "react-router-config";

// https://www.npmjs.com/package/http-proxy-middleware
import proxy from "http-proxy-middleware";

import routes from "./../Routes";
import renderHTML from "./renderHTML";
// import path from 'path'
const express = require("express");
const app = express();

// 其它请求路径返回对应的本地文件
app.use(express.static("public"));

// 请求中转 FIXME: 服务器请求管理，提出去
app.use(
  "/api",
  proxy({
    target: "http://localhost:3030"
    // pathRewrite: {'^/api' : '/api'}
  })
);
app.use(
  "/mockApi",
  proxy({
    target: "https://www.fastmock.site",
    pathRewrite: { "^/mockApi": "/mock/351cdef58fe03a3b33a27bfbf9e804d9/api" },
    changeOrigin: true
  })
);

app.get("*", renderHTML);

app.listen(4399, function() {
  console.log("app listening on port 4399!");
});
