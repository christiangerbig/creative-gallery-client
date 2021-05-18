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
import NotFound from './components/NotFound';

class App extends Component {

  state = {
    error: null
  }

  // -------------- Request Form --------------
  handleRequestSubmit = (event) => {
    event.preventDefault();
    const {email, subject, message} = event.target;
    let request = {
      email: email.value,
      subject: subject.value,
      message: message.value
    };
    //1. Make an API call to the server side Route to create a request
    axios.post(`${config.API_URL}/api/request`, request)
      .then(
        () => {
          this.setState(
            () => {
              this.props.history.push("/");
            }
          );
        }
      )
      .catch(
        (err) => {
          this.setState(
            {
              error: err.response.data.errorMessage
            }
          );
          console.log("Fehler",err.response.data.errorMessage);
        }
      );
  }


  /*handleRequestSubmit = (event) => {
    event.preventDefault();
    const {email, subject, message} = event.target;
    //1. Make an API call to the server side Route to create a request
    let request = {
      email: email.value,
      subject: subject.value,
      message: message.value
    };
    axios.post(`${config.API_URL}/api/request`, request, { withCredentials: true })
      .then(
        () => {
          // 2. Once the server has successfully created a new message, update your state that is visible to the user
          this.setState(
            () => {
              // 3. Once the state is update, redirect the user to the home page
              this.props.history.push("/");
            }
          );
        }
      )
      .catch(
        (err) => {
          this.setState(
            {
              errorMessage: err.response.data.errorMessage
            }
          );
        }
      );
  }*/

  // -------------- Render ---------------
  render() {
    const { error } = this.state;
    return (
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/" render={
            () => {
              return <Home/>
            }
          }/>
          <Route exact path="/about" render={
            () => {
              return <About/>
            }
          }/>
          <Route exact path="/projects" render={
            () => {
              return <Projects/>
            }
          }/>

          <Route path="/contact" render={
            (routeProps) => {
              return <Contact onRequest={this.handleRequestSubmit} error={error} {...routeProps} />
            }
          } />

          {/*<Route path="/contact" render={
            (routeProps) => {
              return <Contact onRequest={this.handleRequestSubmit} errorMessage={errorMessage} {...routeProps}/>
            }
          }/>*/}
         
          {
           <Route component={NotFound}/>
          }
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(App);