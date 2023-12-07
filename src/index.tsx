import React from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./services";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root") as HTMLElement;

if (rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </React.StrictMode>
  );
} else {
  createRoot(rootElement).render(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </React.StrictMode>
  );
}
