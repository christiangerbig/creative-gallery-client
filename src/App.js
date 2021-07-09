import React, { Component } from "react";
import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import config from "./config";
import axios from "axios";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CV from "./components/CV";
import NotFound from './components/NotFound';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuNumber: null,
      error: null
    };
    this.resetError = this.resetError.bind(this);
    this.handleHomeClicked = this.handleHomeClicked.bind(this);
    this.handleAboutClicked = this.handleAboutClicked.bind(this);
    this.handleProjectsClicked = this.handleProjectsClicked.bind(this);
    this.handleContactClicked = this.handleContactClicked.bind(this);
    this.handleRequestSubmit = this.handleRequestSubmit.bind(this);
  }

  // Clear error messages
  resetError() {
    this.setState({ error: null });
  }

  // Handle clicked navlinks
  handleHomeClicked() {
    this.setState({ menuNumber: 0 });
  } 
  handleAboutClicked() {
    this.setState({ menuNumber: 1 });
  } 
  handleProjectsClicked() {
    this.setState({ menuNumber: 2 });
  } 
  handleContactClicked() {
    this.setState({ menuNumber: 3 });
  } 

  // Create request
  handleRequestSubmit(event) {
    event.preventDefault();
    const {email, subject, message} = event.target;
    const request = {
      email: email.value,
      subject: subject.value,
      message: message.value
    };
    axios.post(`${config.API_URL}/api/request`, request)
      .then(
        () => this.setState(() => this.props.history.push("/"))
      )
      .catch(
        (err) => this.setState({error: err.response.data.errorMessage})
      );
  }

  render() {
    const {menuNumber, error} = this.state;
    return (
      <div>
        <NavBar onHomeClicked={this.handleHomeClicked} onAboutClicked={this.handleAboutClicked} onProjectsClicked={this.handleProjectsClicked} onContactClicked={this.handleContactClicked} menuNumber= {menuNumber}/>
        <Switch>
          <Route exact path="/" render={
            (routeProps) => {
              return <Home onAboutClicked={this.handleAboutClicked} onProjectsClicked={this.handleProjectsClicked} {...routeProps}/>
            }
          }/>
          <Route path="/about" render={
            (routeProps) => {
              return <About onContactClicked={this.handleContactClicked} {...routeProps}/>
            }
          }/>
          <Route path="/projects" render={
            () => {
              return <Projects/>
            }
          }/>
          <Route path="/contact" render={
            (routeProps) => {
              return <Contact onRequest={this.handleRequestSubmit} onResetError={this.resetError} error={error} {...routeProps}/>
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
}

export default withRouter(App);