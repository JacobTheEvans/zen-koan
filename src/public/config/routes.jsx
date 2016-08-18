import React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Wrapper from "../components/wrapper.jsx";
import About from "../components/about.jsx";
import Story from "../components/story.jsx";
import Page404 from "../components/404.jsx";

let routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Wrapper}>
      <IndexRoute component={About} />
      <Route path="/story" component={Story} />
      <Route path="*" component={Page404} />
    </Route>
  </Router>
);

export default routes;
