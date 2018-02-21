import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./Navbar";
import MainContainer from "./MainContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={MainContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
