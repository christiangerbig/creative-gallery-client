import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";
import "./i18n";
import { OnlineStatusProvider } from "./lib/connectionCheck";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <OnlineStatusProvider>
        <Router>
          <App />
        </Router>
      </OnlineStatusProvider>
    </Provider>
  </React.StrictMode>,
  document.querySelector("#root")
);
