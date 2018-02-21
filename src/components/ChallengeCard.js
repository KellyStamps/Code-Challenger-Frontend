import React from "react";

const ChallengeCard = ({ challenge }) => {
  return (
    <div className="challenge-card">
      <p>{challenge.content}</p>
      <p>Rating: {challenge.rating}/10</p>
    </div>
  );
};

export default ChallengeCard;
