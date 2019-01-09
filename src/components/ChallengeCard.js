import React from "react";
import { connect } from 'react-redux';
import { showChallenge } from '../actions/challenges';
import { Link } from 'react-router-dom';
import '../styles/challenges/challenge_card.css';

class ChallengeCard extends React.Component { 
  render () {
    return (
      <div className="challenge-card">
        <Link to={`/challenges/${this.props.challenge.id}`} >
          <p onClick={() => this.props.showChallenge(this.props.challenge)}>{this.props.challenge.content}</p>
        </Link>
        <p>Rating: {this.props.challenge.rating}/10</p>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {...state.users, ...state.challenges}
}

export default connect(mapStateToProps, {showChallenge})(ChallengeCard);
