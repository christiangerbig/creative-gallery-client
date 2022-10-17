import { Route, Switch, withRouter } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import Menu from "./components/navigation/NavMenu";
import Footer from "./components/Footer";
import Home from "./views/Home";
import About from "./views/About";
import Projects from "./views/Projects";
import TechStack from "./views/TechStack";
import Contact from "./views/Contact";
import PageNotFound from "./views/NotFound";
import Modals from "./components/modals/Modals";

import "./App.min.css";

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
      <Modals />
      <Footer />
    </div>
  );
};

export default withRouter(App);
