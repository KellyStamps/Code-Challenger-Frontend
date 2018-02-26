import React from "react";
import { connect } from 'react-redux';

class ChallengeShow extends React.Component {
  
  render() {
    return this.props.showChallenge ? (
      <div className="challenge-show">
        <h2>{this.props.showChallenge.content}</h2>
        <h4>Rating: {this.props.showChallenge.rating}/10</h4>
      </div>
    ) : (<div className="challenge-show"><h1>Nope</h1></div>)
  }
}

const mapStateToProps = (state) => {
  return {...state.users, ...state.challenges}
}

export default connect(mapStateToProps)(ChallengeShow);
