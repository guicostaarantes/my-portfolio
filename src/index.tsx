import React from "react";
import ReactDOM from "react-dom";
import { SnackbarProvider } from "notistack";
import Home from "./pages/Home";
import "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
      <Home />
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
