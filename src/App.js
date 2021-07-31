import React, {useState} from "react";
import {Route, Switch, withRouter} from "react-router-dom";

import "./App.min.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CV from "./components/CV";
import NotFound from "./components/NotFound";

const App = () => {
  const [menuNumber, setMenuNumber] = useState(null);

  // Analyze click on navigation links
  const handleNavLinkClicked = menuNumber => setMenuNumber(menuNumber)

  return (
    <div>
      <NavBar 
        onNavLinkClicked={handleNavLinkClicked} 
        menuNumber={menuNumber}
      />
      <Switch>
        <Route exact path="/">
          <Home onNavLinkClicked={handleNavLinkClicked}/> 
        </Route>
        <Route path="/about">
          <About onNavLinkClicked={handleNavLinkClicked}/>
       </Route>
        <Route path="/projects">
          <Projects/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/cv">
          <CV/>
        </Route>
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default withRouter(App);