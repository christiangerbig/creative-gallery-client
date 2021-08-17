import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import "./App.min.css";

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Projects from "./Screens/Projects";
import Contact from "./Screens/Contact";
import CV from "./Screens/CV";
import NotFound from "./Screens/NotFound";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/cv">
          <CV />
        </Route>
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
};

export default withRouter(App);