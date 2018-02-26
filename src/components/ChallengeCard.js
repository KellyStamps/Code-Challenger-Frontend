import React from "react";
import { connect } from 'react-redux';
import {showChallenge} from '../actions/challenges';
import {Link} from 'react-router-dom';

const ChallengeCard = (props) => {
  return (
    <div className="challenge-card">
      <Link to={`/challenges/${props.challenge.id}`} >
        <p onClick={() => props.showChallenge(props.challenge)}>{props.challenge.content}</p>
      </Link>
      <p>Rating: {props.challenge.rating}/10</p>
    </div>
  );
};


export default connect(null, {showChallenge})(ChallengeCard);
