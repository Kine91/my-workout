import * as React from "react";
import {render} from "react-dom";

import App from "./App";
import "./styles/main.scss";

const rootEl = document.getElementById("root");

render(
    <App/>,
    rootEl,
);
