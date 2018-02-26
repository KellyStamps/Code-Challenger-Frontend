import React from "react";
import { connect } from 'react-redux';
import {showChallenge} from '../actions/challenges'

const ChallengeCard = ({ challenge, showChallenge }) => {
  return (
    <div className="challenge-card">
      <p id={challenge.id} onClick={() => showChallenge(challenge)}>
        {challenge.content}
      </p>
      <p>Rating: {challenge.rating}/10</p>
    </div>
  );
};



export default connect(null, {showChallenge})(ChallengeCard);
