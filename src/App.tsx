import { Route, Switch, withRouter } from "react-router-dom";
import "./App.min.css";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import About from "./screens/About";
import Projects from "./screens/Projects";
import TechStack from "./screens/TechStack";
import Contact from "./screens/Contact";
import NotFound from "./screens/NotFound";

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
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
};

export default withRouter(App);
