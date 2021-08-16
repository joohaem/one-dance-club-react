import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "../Routes/Home";
import AboutUs from "../Routes/AboutUs";
import Portfolio from "../Routes/Portfolio";
import QnA from "../Routes/QnA";
import Contact from "../Routes/Contact";
import Footer from "./Footer";
import "./Common.css";


export default () => ( 
  <HashRouter>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutus" exact component={AboutUs} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/qna" exact component={QnA} />
        <Route path="/contact" exact component={Contact} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </>
  </HashRouter>
);