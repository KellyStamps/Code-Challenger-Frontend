import React from "react";
import LoginForm from "./LoginForm";
import ChallengeList from "./ChallengeList";
import { Redirect } from "react-router";
import {connect} from 'react-redux'

class LoggedOutHome extends React.Component {
  // state = {
  //   challenges: []
  // };
  // 
  // componentDidMount() {
  //   fetch(`http://localhost:3000/api/v1/challenges`)
  //     .then(res => res.json())
  //     .then(data => this.setState({ challenges: data.challenges }));
  // }

  render() {
    return (
      <div className="loggedout-container">
        <ChallengeList challenges={this.props.challenges} />
        {this.props.user.length > 0 ? null : <LoginForm />}
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {user: state}
}

export default connect (mapStateToProps)(LoggedOutHome);
