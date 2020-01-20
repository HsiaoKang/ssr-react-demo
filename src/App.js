import React, { useEffect } from "react";
import Helmet from "react-helmet";

import Header from "./components/Header";
import { renderRoutes } from "react-router-config";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "./components/Header/store/actions";
const App = ({ route }) => {
  const useInfo = useSelector(state => state.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  return (
    <>
      <Helmet>
        {/* <meta charSet="utf-8" /> */}
        <title>My Title</title>
        <meta name="desription" content="ssr-demo，包含各类技术实现" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="app">
        <Header />
        {renderRoutes(route.routes)}
      </div>
    </>
  );
};

App.loadData = store => {
  return store.dispatch(getUserInfo());
};
export default App;
