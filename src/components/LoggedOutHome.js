import React from "react";
import LoginForm from "./LoginForm";
import SmallChallengeList from "./SmallChallengeList";
import AuthAdapter from '../api/AuthAdapter';
import {connect} from 'react-redux';

class LoggedOutHome extends React.Component {
  
  checkLocalStorage(){
    return localStorage.jwt == null 
  }
  
  componentDidMount(){
    if (!this.checkLocalStorage()) {
      console.log(AuthAdapter.currentUser())
    }  
  }

  render() {
    return this.checkLocalStorage() ? (<div className="loggedout-container">
        <SmallChallengeList/>
        <LoginForm /> 
      </div>
    ) : null
  }
}

const mapStateToProps = (state) => {
  return {...state.users}
}

export default connect (mapStateToProps)(LoggedOutHome);
