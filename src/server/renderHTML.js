/**
服务器 渲染 处理
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { matchRoutes, renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import Helmet from "react-helmet";
import StyleContext from "isomorphic-style-loader/StyleContext";

// store
import { createServerStore } from "../store";
// routes
import routes from "./../Routes";

/**
 * 组件需要加载的数据
 */
function getLoadDataStack(routes, path, store) {
  const matchedRoutes = matchRoutes(routes, path);

  let promises = [];
  matchedRoutes.forEach(match => {
    // if (match.route.loadData) {
    //   const promise = new Promise((resolve, reject) => {
    //     match.route
    //       .loadData(store)
    //       .then(resolve)
    //       .catch(resolve);
    //   });
    //   promises.push(promise);
    // }
    if (match.route.loadData) {
      promises.push(match.route.loadData(store));
    }
  });
  return promises;
}

/**
 *html 字符串
 */
function getHTMLString(content, css, dataSource) {
  const helmet = Helmet.renderStatic();
  return `
<html ${helmet.htmlAttributes.toString()}>
<head>
<meta charset="UTF-8">
${helmet.title.toString()}
${helmet.meta.toString()}
${helmet.link.toString()}
<style>${[...css].join("")}</style>
</head>
<body ${helmet.bodyAttributes.toString()}>
<div id="root">${content}</div>

<!--原始数据-->
<script>
window.__ROUTE_DATA__=${dataSource}
</script>
<!--导入 webpack 输出的用于浏览器端渲染的 JS 文件-->
<script src="/index.js"></script>
</body>
</html>
`;
}

/**
 * 渲染首屏html
 */
function renderHTML(req, res) {
  // store
  const store = createServerStore(req, res);

  //  根据请求的path，匹配满足的路由
  const matchedRoutes = matchRoutes(routes, req.path);

  //  所有的数据请求
  let loadDataStack = getLoadDataStack(routes, req.path, store);
  // console.log("loadDataStack", loadDataStack);

  // render
  // allSettled
  Promise.allSettled(loadDataStack)
    .then(result => {
      // 路由下的页面和请求间的内容传递（404、重定向信息）；
      // TODO: reart-router-dom 的Redirect 组件
      const context = {};
      // 执行每个route 的loadData
      const css = new Set();
      const insertCss = (...styles) => {
        console.log("styles", styles);

        styles.forEach(style => css.add(style._getCss()));
      };
      const content = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.path} context={context}>
            <StyleContext.Provider value={{ insertCss }}>
              {renderRoutes(routes)}
            </StyleContext.Provider>
          </StaticRouter>
        </Provider>
      );
      const HTMLString = getHTMLString(
        content,
        css,
        serialize(store.getState())
      );
      // 404
      if (context.notFound) {
        res.status(404);
      }
      res.send(HTMLString);
      // TODO:接口错误处理

      console.log("result", result);
    })
    .catch(error => {
      console.log("error", error);
    });
}
export default renderHTML;
