import React from "react";
import ChallengeCard from "./ChallengeCard";
import {Link} from 'react-router-dom'
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
    ) : (
      <div className="challenge-show-error"><h1>Please <Link to='/'>log in</Link>  to view challenges</h1></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.users.user, challenges: state.challenges.challenges}
}

export default connect(mapStateToProps)(ChallengeList);
