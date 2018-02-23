import React from "react";
import { Redirect } from "react-router";

class ChallengeShow extends React.Component {
  state = {
    challenge: this.props.challenge,
    user: this.props.user
  };

  render() {
    return this.state.challenge && this.state.user ? (
      <div className="challenge-show">
        <h2>{this.state.challenge.content}</h2>
        <h4>Rating: {this.state.challenge.rating}/10</h4>
      </div>
    ) : (
      <Redirect to='/' />
    );
  }
}

export default ChallengeShow;
