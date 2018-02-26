import React from "react";
import { Redirect } from "react-router";
import { connect } from 'react-redux';

class ChallengeShow extends React.Component {
  
  render() {
    return this.props.challenge ? (
      <div className="challenge-show">
        <h2>{this.state.challenge.content}</h2>
        <h4>Rating: {this.state.challenge.rating}/10</h4>
      </div>
    ) : (<div className="challenge-show"><h1>Nope</h1></div>)
  }
}

const mapStateToProps = (state) => {
  return {user: state.users.user, challenge: state.challenges.showChallenge }
}

export default connect(mapStateToProps)(ChallengeShow);
