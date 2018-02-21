import React from "react";
import ChallengeCard from "./ChallengeCard";

class ChallengeList extends React.Component {
  render() {
    return (
      <div className="challenge-list">
        {this.props.challenges.map(chal => <ChallengeCard challenge={chal} />)}
      </div>
    );
  }
}

export default ChallengeList;
