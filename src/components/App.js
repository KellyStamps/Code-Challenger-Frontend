import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchChallenges } from '../actions/challenges';
import { fetchUsers } from '../actions/users';
import { ROOT } from '../constants/index';
import NavBar from "./Navbar";
import SingleChallenge from "./SingleChallenge";
import InProgressChallenges from "./InProgressChallenges";
import CompletedChallenges from "./CompletedChallenges";
import SavedChallengesContainer from "./SavedChallengesContainer";
import ProfileContainer from "./ProfileContainer";
import ChallengesIndex from "./ChallengesIndex";
import LoggedOutHome from "./LoggedOutHome";
import UsersIndexContainer from "./UsersIndexContainer";
import FriendIndex from "./FriendIndex";
import CreateChallengeContainer from "./CreateChallengeContainer";
import "../styles/App.css";


class App extends Component {
  
  componentDidMount() {
    fetch(`${ROOT}challenges`)
      .then(res => res.json())
      .then(data => {
        this.props.fetchChallenges(data.challenges, data.lazy_links)
        this.props.fetchUsers(data.allUsers)
      })
  }
  
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={ LoggedOutHome }/>
          <Route exact path="/challenges/new" component={ CreateChallengeContainer } />
          <Route
            path="/challenges/:id"
            render={props => {
            let challenge = this.props.challenges.find(chal => chal.id === props.match.params.id)   
            return <SingleChallenge challenge={ challenge }/>}}
            />
          <Route exact path="/challenges" component={ ChallengesIndex } />
          <Route path='/users/:id/challenges/inprogress/:id' component={ InProgressChallenges }/>
          <Route path='/users/:id/challenges/completed/:id' component={ CompletedChallenges }/>
          <Route path="/users/:id/challenges" component={ SavedChallengesContainer }/>
          <Route exact path="/users/all/:id" component={ FriendIndex }/>
          <Route exact path="/users/all" component={ UsersIndexContainer }/>
          <Route path="/users/:id" component={ ProfileContainer }/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps =(state)=> {
  return {...state.challenges, ...state.allUsers}
}

export default withRouter(connect(mapStateToProps, { fetchChallenges, fetchUsers })(App));
