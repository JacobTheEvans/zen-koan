import React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Wrapper from "../components/wrapper.jsx";
import About from "../components/about.jsx";
import Koan from "../components/koan.jsx";
import KoanList from "../components/koan-list.jsx";
import Page404 from "../components/404.jsx";

let routes = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
    <Route path="/" component={Wrapper}>
      <IndexRoute component={About} />
      <Route path="/koans" component={KoanList} />
      <Route path="/koan/:id" component={Koan} />
      <Route path="*" component={Page404} />
    </Route>
  </Router>
);

export default routes;
