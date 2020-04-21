import React from "react";
import ReactDOM from "react-dom";
import { SnackbarProvider } from "notistack";
import Home from "./pages/Home";
import "./i18n";

ReactDOM.render(
  <SnackbarProvider maxSnack={3}>
    <Home />
  </SnackbarProvider>,
  document.getElementById("root")
);
