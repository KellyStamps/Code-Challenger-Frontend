import React from "react";
import ChallengeCard from "./ChallengeCard";
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';

class ChallengeList extends React.Component {

  render() {
      return this.props.user ? (
      <div className="challenge-list">
        {this.props.challenges.map(chal => (
          <ChallengeCard challenge={chal} key={chal.id}/>
        ))}
      </div>
    ) : (
      <div className="challenge-show-error"><h1>Please <Link to='/'>log in</Link>  to view challenges</h1></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {...state.users, ...state.challenges}
}

export default connect(mapStateToProps)(ChallengeList);
