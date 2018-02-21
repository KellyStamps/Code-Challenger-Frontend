import React, { Component } from "react";
import NavBar from "./Navbar";
import MainContainer from "./MainContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <MainContainer />
      </div>
    );
  }
}

export default App;
