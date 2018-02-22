import React from "react";

const ChallengeCard = ({ challenge, handleClick }) => {
  return (
    <div className="challenge-card">
      <p id={challenge.id} onClick={handleClick}>
        {challenge.content}
      </p>
      <p>Rating: {challenge.rating}/10</p>
    </div>
  );
};

export default ChallengeCard;
