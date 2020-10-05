import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./screens/Home";
import About from "./screens/About";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route render={() => <p>Page not found.</p>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
