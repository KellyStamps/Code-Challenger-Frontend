import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {fetchChallenges} from '../actions/challenges'
import NavBar from "./Navbar";
import ChallengeShow from "./ChallengeShow";
import ProfileContainer from "./ProfileContainer";
import ChallengeList from "./ChallengeList";
import LoggedOutHome from "./LoggedOutHome";
import "./App.css";


class App extends Component {
  state = {
    challengeShow: null
  };
  
  // componentDidMount() {
  //   this.props.fetchChallenges()
  // }

  handleClickedCard = arg => {
    this.setState({ challengeShow: arg });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
          
        <Switch>
          <Route exact path="/"
            component={LoggedOutHome}/>
          
          <Route
            path="/challenges/:id"
            render={props => {
            return <ChallengeShow challenge={this.state.challengeShow} />}}
            />
            
          <Route exact path="/challenges"
            render={props => {
            return <ChallengeList handleClickedCard={this.handleClickedCard} challenge={this.state.challengeShow}/>}}
          />
          
          <Route path="/users/:id"
            component={ProfileContainer}/>
            
        </Switch>
      </div>
    );
  }
}

export default withRouter((App));
