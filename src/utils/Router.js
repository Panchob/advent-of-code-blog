import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import App from "../pages/App";
import {Day01 as D01_2019}  from "../pages/2019/Day01"


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/2019/day01" component={D01_2019}/>
    </Switch>
  </BrowserRouter>
)

export default Router;
