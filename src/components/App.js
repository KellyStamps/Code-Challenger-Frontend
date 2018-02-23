import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Navbar";
import ChallengeShow from "./ChallengeShow";
import ProfileContainer from "./ProfileContainer";
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
    return (
      <div className="App">
        <NavBar user={this.state.user} />
          
        <Switch>
          <Route exact path="/"
            render={props => {
            return <LoggedOutHome user={this.state.user} redirectHelper={this.loggedInHelper}/>}}
            />
          
          <Route
            path="/challenges/:id"
            render={props => {
            return <ChallengeShow challenge={this.state.challengeShow} user={this.state.user} />}}
            />
            
          <Route exact path="/challenges"
            render={props => {
            return <ChallengeList handleClickedCard={this.handleClickedCard} challenge={this.state.challengeShow}/>}}
          />
          
          <Route path="/users/:id"
            render={props => {
            return <ProfileContainer user={this.state.user} />}}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
