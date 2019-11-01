import React, { Component } from "react";
import { Route, Link } from "../react-router-dom";
import "./index.css";

export default ({ to,exact, ...rest }) => {
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => {
          console.log(match);
          
        return (
          <Link className={match ? "active" : ""} to={to} {...rest}>
            {rest.children}
          </Link>
        );
      }}
    />
  );
};
