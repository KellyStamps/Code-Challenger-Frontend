import React from "react";
import LoginForm from "./LoginForm";
import SmallChallengeList from "./SmallChallengeList";
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom';

class LoggedOutHome extends React.Component {

  render() {
    return this.props.user ? (<Redirect to={`/users/${this.props.user.id}/challenges`}/>)
    :
    (<div className="loggedout-container">
        <SmallChallengeList/>
        <LoginForm /> 
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {...state.users}
}

export default connect (mapStateToProps)(LoggedOutHome);
