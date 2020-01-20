module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
              plugins: ["@babel/plugin-transform-runtime"]
            }
          }
        ]
      },
      {
        // 匹配css
        test: /\.css$/,
        use: [
          "isomorphic-style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              //   localIdentName:'[name]_[local]_[hash:base64:5]'
              modules: {
                localIdentName: "[name]_[local]--[hash:base64:5]"
              }
            }
          }
        ]
      }
    ]
  }
};
