import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./index.css";
import "./app/i18n";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Suspense fallback="loading">
          <App />
        </Suspense>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.querySelector("#root")
);
