import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./Navbar";
import ChallengeList from "./ChallengeList";
import LoggedOut from "./LoggedOut";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={LoggedOut} />
          <Route exact path="/challenges" component={ChallengeList} />
        </div>
      </Router>
    );
  }
}

export default App;
