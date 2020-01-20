const path = require("path");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = require("./config.base");
const basePath = path.resolve(__dirname, "../");

const clientConfig = {
  mode: "development",
  // 入口
  entry: path.resolve(basePath, "src/client"),
  output: {
    filename: "index.js",
    path: path.resolve(basePath, "public")
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  // module: {
  //   rules: [
  //     {
  //       // 匹配css
  //       test: /\.css$/,
  //       use: [
  //         {
  //           loader: MiniCssExtractPlugin.loader,
  //           options: {
  //             esModule: true
  //           }
  //         },
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
  // },
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     filename: `[name]_[contenthash:8].css`
  //   })
  // ]
};
module.exports = merge(config, clientConfig);
