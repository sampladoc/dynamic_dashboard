import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "./dashboard/Paperbase";
import Home from "./views/Home";
import Soon from "./views/Soon";


//===

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/soon" component={Soon} />
        </Router>
      </div>
    );
  }
}

export default App;
