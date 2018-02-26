import React from "react";
import LoginForm from "./LoginForm";
import SmallChallengeList from "./SmallChallengeList";
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom';

class LoggedOutHome extends React.Component {

  render() {
    return this.props.user ? (<Redirect to='/challenges'/>)
    :
    (
      <div className="loggedout-container">
        <SmallChallengeList/>
        {this.props.user == null ? <LoginForm /> : null }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.users.user}
}

export default connect (mapStateToProps)(LoggedOutHome);
