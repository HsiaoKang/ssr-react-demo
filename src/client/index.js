import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import StyleContext from "isomorphic-style-loader/StyleContext";
import routes from "../Routes";

import { createClientStore } from "../store";

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss());
  return () => removeCss.forEach(dispose => dispose());
};

const AppWrap = () => {
  return (
    <StyleContext.Provider value={{ insertCss }}>
      <Provider store={createClientStore()}>
        <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
      </Provider>
    </StyleContext.Provider>
  );
};
ReactDom.hydrate(<AppWrap />, document.getElementById("root"));
