import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./Navbar";
import ChallengeShow from "./ChallengeShow";
import ChallengeList from "./ChallengeList";
import LoggedOutHome from "./LoggedOutHome";
import "./App.css";

class App extends Component {
  state = {
    user: null
  };

  loggedInHelper = arg => {
    console.log(arg);
    this.setState({ user: arg });
  };

  render() {
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
          <Route exact path="/challenges" component={ChallengeList} />
          <Route path="/challenges/:id" component={ChallengeShow} />
        </div>
      </Router>
    );
  }
}

export default App;
