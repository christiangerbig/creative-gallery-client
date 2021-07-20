import React, {useState} from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import config from "./config";
import axios from "axios";
import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CV from "./components/CV";
import NotFound from "./components/NotFound";

const App = props => {
  const [menuNumber, setMenuNumber] = useState(null);
  const [error, setError] = useState(null);

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
        () => props.history.push("/")
      )
      .catch(
        err => setError(err.response.data.errorMessage)
      );
  }

  // Clear error message
  const handleClearError = () => setError(null)

  return (
    <div>
      <NavBar onNavLinkClicked={handleNavLinkClicked} menuNumber={menuNumber}/>
      <Switch>
        <Route exact path="/" render={
          routeProps => {
            return <Home onNavLinkClicked={handleNavLinkClicked} {...routeProps}/>
          }
        }/>
        <Route path="/about" render={
          routeProps => {
            return <About onNavLinkClicked={handleNavLinkClicked} {...routeProps}/>
          }
        }/>
        <Route path="/projects" render={
          () => {
            return <Projects/>
          }
        }/>
        <Route path="/contact" render={
          routeProps => {
            return <Contact onRequest={handleSubmitRequest} onClearError={handleClearError} error={error} {...routeProps}/>
          }
        }/>
          <Route path="/cv" render={
          () => {
            return <CV/>
          }
        }/>
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default withRouter(App);