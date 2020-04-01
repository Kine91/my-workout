import * as React from "react";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

export default class App extends React.Component<{}, undefined> {
  public render() {
    return (
      <section id="page-wrapper">
        <Header />

        <main>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </Router>
        </main>

        <Footer />
      </section>
    );
  }
}
