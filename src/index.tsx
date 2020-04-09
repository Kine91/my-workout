import * as React from "react";
import {render} from "react-dom";
import { Provider } from "react-redux";

import { store } from "./redux";
import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/main.scss";

const rootEl = document.getElementById("root");

render(
  <Provider store={store}>
    <App/>
  </Provider>,
    rootEl,
);
