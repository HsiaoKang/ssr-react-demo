import React from "react";

import App from "./App";
import Home from "./containers/Home";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";

export default [
  {
    path: "/",
    component: App,
    loadData: App.loadData,
    routes: [
      {
        path: "/home",
        key: "home",
        component: Home,
        // exact 为false 则会匹配到 / 和 /*
        exact: true,
        loadData: Home.loadData
      },
      {
        path: "/login",
        key: "login",
        component: Login,
        exact: true
      },
      {
        component: NotFound
      }
    ]
  }
];