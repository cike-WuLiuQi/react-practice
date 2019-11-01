import React, { Component } from "react";
import Route from "./Route";

export default Component => {
  return props => <Route component={Component} />;
};
