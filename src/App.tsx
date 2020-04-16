import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./redux";

import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

export default class App extends React.Component<{}, undefined> {
  public render() {
    return (

      <Router>
        <Provider store={store}>
          <section id="page-wrapper">
            <Header />

            <main>
                <Switch>
                  <Route exact path="/">
                    <Home {...this.state} />
                  </Route>
                  <Route path="/about">
                    <About />
                  </Route>
                </Switch>
            </main>

            <Footer />
          </section>
        </Provider>
      </Router>
    );
  }
}
