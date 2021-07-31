import React, {useState} from "react";
import {Route, Switch, withRouter, useHistory} from "react-router-dom";
import config from "./config";
import axios from "axios";

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
  const [error, setError] = useState(null);

  const history = useHistory();

  // Analyze click on navigation links
  const handleNavLinkClicked = menuNumber => setMenuNumber(menuNumber)

  // Create request
  const handleSubmitRequest = event => {
    event.preventDefault();
    const {email, subject, message} = event.target;
    const request = {
      email: email.value,
      subject: subject.value,
      message: message.value
    };
    axios.post(`${config.API_URL}/api/request`, request)
      .then(
        () => history.push("/")
      )
      .catch(
        err => setError(err.response.data.errorMessage)
      );
  }

  // Clear error message
  const handleClearError = () => setError(null)

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
          <Contact 
            onRequest={handleSubmitRequest} 
            onClearError={handleClearError} 
            error={error}
          />
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