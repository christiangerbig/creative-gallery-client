import { Route, Switch, withRouter } from "react-router-dom";
import "./App.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";
import NotFound from "./screens/NotFound";

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
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
};

export default withRouter(App);
