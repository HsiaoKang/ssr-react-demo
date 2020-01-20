import React, { useEffect } from "react";
import Header from "../../components/Header";

const NotFound = ({ staticContext }) => {
  if (staticContext) {
    staticContext.notFound = true;
  }
  return <div>404</div>;
};
export default NotFound;
