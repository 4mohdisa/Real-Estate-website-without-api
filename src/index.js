import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import EstateContextProvider from "./context/EstateContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EstateContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </EstateContextProvider>
  </React.StrictMode>
);
