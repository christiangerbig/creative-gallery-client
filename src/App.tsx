import { Route, Switch, withRouter } from "react-router-dom";
import { useAppSelector } from "./hooks";
import { RootState } from "./store";
import { useOnlineStatus } from "./lib/connectionCheck";

import "./App.min.css";

import NavBar from "./components/navigation/NavBar";
import Menu from "./components/navigation/NavMenu";
import Footer from "./components/Footer";
import Home from "./views/Home";
import About from "./views/About";
import Projects from "./views/Projects";
import TechStack from "./views/TechStack";
import Contact from "./views/Contact";
import PageNotFound from "./views/NotFound";
import ErrorModal from "./components/modals/ErrorModal";
import OfflineModal from "./components/modals/OfflineModal";

const App = (): JSX.Element => {
  const errorMessage = useAppSelector(
    (state: RootState) => state.creativeGallery.errorMessage
  );
  const isOnline = useOnlineStatus();

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
      {errorMessage && !errorMessage.includes("Form") && (
        <ErrorModal errorMessage={errorMessage} />
      )}
      {!isOnline && <OfflineModal />}
    </div>
  );
};

export default withRouter(App);
