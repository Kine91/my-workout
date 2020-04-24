import * as React from "react";
import {render} from "react-dom";

import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/main.scss";

const rootEl = document.getElementById("root");

render(
  <App/>,
  rootEl
);
