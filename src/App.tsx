import { Route, Switch, withRouter } from "react-router-dom";
import { useAppSelector } from "./hooks";
import { RootState } from "./store";
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
import ErrorModal from "./components/ErrorModal";

const App = (): JSX.Element => {
  const errorMessage = useAppSelector(
    (state: RootState) => state.creativeGallery.errorMessage
  );

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
      {errorMessage && errorMessage.includes("Form") && (
        <ErrorModal errorMessage={errorMessage} />
      )}
    </div>
  );
};

export default withRouter(App);
