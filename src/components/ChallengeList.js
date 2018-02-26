import React from "react";
import ChallengeCard from "./ChallengeCard";
import { Redirect } from "react-router";
import { connect } from 'react-redux';

class ChallengeList extends React.Component {

  render() {
      return this.props.user ? (
      <div className="challenge-list">
        {this.props.challenges.map(chal => (
          <ChallengeCard
            key={chal.id}
            handleClick={this.handleClickedCard}
            challenge={chal}
          />
        ))}
      </div>
    ) : (<Redirect to='/'/>)
  }
}

const mapStateToProps = (state) => {
  return {user: state.users.user, challenges: state.challenges.challenges}
}

export default connect(mapStateToProps)(ChallengeList);
