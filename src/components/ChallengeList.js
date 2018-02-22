import React from "react";
import ChallengeCard from "./ChallengeCard";

class ChallengeList extends React.Component {
  state = {
    challenges: [],
    user: null
  };

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/challenges`)
      .then(res => res.json())
      .then(data => this.setState({ challenges: data.challenges }));
  }

  handleClickedCard = event => {
    fetch(`http://localhost:3000/api/v1/challenges/${event.target.id}`).then(
      res => res.json()
    );
  };

  render() {
    return (
      <div className="challenge-list">
        {this.state.challenges.map(chal => (
          <ChallengeCard
            handleClick={this.handleClickedCard}
            challenge={chal}
          />
        ))}
      </div>
    );
  }
}

export default ChallengeList;
