import { Route, Switch, withRouter } from "react-router-dom";
import "./App.min.css";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Home from "./views/Home";
import About from "./views/About";
import Projects from "./views/Projects";
import TechStack from "./views/TechStack";
import Contact from "./views/Contact";
import PageNotFound from "./views/PageNotFound";

const App = (): JSX.Element => {
  return (
    <div>
      <NavBar />
      <Menu />
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
        <Route path="/techstack">
          <TechStack />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  );
};

export default withRouter(App);
