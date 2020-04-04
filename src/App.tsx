import * as React from "react";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

export default class App extends React.Component<{}, undefined> {
  public render() {
    return (

      <Router>
        <section id="page-wrapper">
          <Header />

          <main>

              <div>
                <p>Zanim sie ostyluje</p>

                <span>Jestem kolorowy</span>
              </div>

              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
              </Switch>
          </main>

          <Footer />
        </section>
      </Router>
    );
  }
}
