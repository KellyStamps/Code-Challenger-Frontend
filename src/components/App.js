import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {fetchChallenges} from '../actions/challenges'
import {fetchUsers} from '../actions/users'
import NavBar from "./Navbar";
import ChallengeShow from "./ChallengeShow";
import MyInProgressChallengeShow from "./MyInProgressChallengeShow";
import MyCompletedChallengeShow from "./MyCompletedChallengeShow";
import MyChallengesContainer from "./MyChallengesContainer";
import ProfileContainer from "./ProfileContainer";
import ChallengeList from "./ChallengeList";
import LoggedOutHome from "./LoggedOutHome";
import UsersIndexContainer from "./UsersIndexContainer";
import UsersIndexShow from "./UsersIndexShow";
import "./App.css";


class App extends Component {
  
  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/challenges`)
      .then(res => res.json())
      .then(data => {
        this.props.fetchChallenges(data.challenges),
        this.props.fetchUsers(data.allUsers)
      })
  }
  
  render() {
    return (
      <div className="App">
        <NavBar />
          
        <Switch>
          <Route exact path="/" component={LoggedOutHome}/>
          
          <Route
            path="/challenges/:id"
            render={props => {
            let challenge = this.props.challenges.find(chal => chal.id === props.match.params.id)   
            return <ChallengeShow challenge={challenge}/>}}
            />
            
          <Route exact path="/challenges" component={ChallengeList} />
          
          <Route path='/users/:id/challenges/inprogress/:id' component={MyInProgressChallengeShow}/>
          
          <Route path='/users/:id/challenges/completed/:id' component={MyCompletedChallengeShow}/>
          
          <Route path="/users/:id/challenges" component={MyChallengesContainer}/>
          
          <Route exact path="/users/all/:id" component={UsersIndexShow}/>
          
          <Route exact path="/users/all" component={UsersIndexContainer}/>
          
          <Route path="/users/:id" component={ProfileContainer}/>

        </Switch>
      </div>
    );
  }
}

const mapStateToProps =(state)=> {
  return {...state.challenges, ...state.allUsers}
}

export default withRouter(connect(mapStateToProps, {fetchChallenges, fetchUsers})(App));
