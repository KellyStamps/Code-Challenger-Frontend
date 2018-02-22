import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./Navbar";
import ChallengeShow from "./ChallengeShow";
import ChallengeList from "./ChallengeList";
import LoggedOutHome from "./LoggedOutHome";
import "./App.css";

class App extends Component {
  state = {
    user: null,
    challengeShow: null
  };

  loggedInHelper = arg => {
    this.setState({ user: arg });
  };

  handleClickedCard = arg => {
    this.setState({ challengeShow: arg });
  };

  render() {
    console.log(this.state);
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route
            exact
            path="/"
            render={props => {
              return (
                <LoggedOutHome
                  user={this.state.user}
                  redirectHelper={this.loggedInHelper}
                />
              );
            }}
          />
          <Route
            exact
            path="/challenges"
            render={props => {
              return (
                <ChallengeList
                  handleClickedCard={this.handleClickedCard}
                  challenge={this.state.challengeShow}
                />
              );
            }}
          />
          <Route
            path="/challenges/:id"
            render={props => {
              return <ChallengeShow challenge={this.state.challengeShow} />;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
