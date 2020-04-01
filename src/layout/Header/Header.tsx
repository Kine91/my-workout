import * as React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export interface Props {
  children?: React.ReactNode
}

export interface State {
}

import './style.scss';

export default class Header extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </Router>
    )
  }
}
