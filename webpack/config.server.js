// 服务器 webpack 配置
const path = require("path");
// 排除node_modules 目录下的第三方模块，在server node环境中安装
const nodeExternals = require("webpack-node-externals");

const merge = require("webpack-merge");
const config = require("./config.base");
const basePath = path.resolve(__dirname, "../");

const serverConfig = {
  target: "node",
  entry: path.resolve(basePath, "src/server"),
  output: {
    filename: "bundle.js",
    path: path.resolve(basePath, "build")
  },
  mode: "development",
  // TODO: 环境区分
  devtool: "source-map",
  externals: [nodeExternals()],
  // module: {
  //   rules: [
  //     {
  //       // 匹配css
  //       test: /\.css$/,
  //       use: [
  //         "isomorphic-style-loader",
  //         {
  //           loader: "css-loader",
  //           options: {
  //             importLoaders: 1,
  //             modules: {
  //               localIdentName: "[name]_[local]--[hash:base64:5]"
  //             }
  //           }
  //         }
  //       ]
  //     }
  //   ]
  // }
};

module.exports = (env = {}) => {
  const NODE_ENV = env.NODE_ENV || process.env.NODE_ENV;
  return merge(config, serverConfig);
};
