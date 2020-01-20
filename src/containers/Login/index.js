import React from "react";
import Helmet from "react-helmet";

import Header from "../../components/Header";
import useStyles from "isomorphic-style-loader/useStyles";
import styles from "./styles.css";
const Login = () => {
  useStyles(styles);
  return (
    <>
      <Helmet>
        {/* <meta charSet="utf-8" /> */}
        <title>登录</title>
        <meta name="desription" content="ssr-demo，包含各类技术实现" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className={styles.login}>login page</div>
    </>
  );
};
export default Login;
