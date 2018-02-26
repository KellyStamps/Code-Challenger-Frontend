import React from "react";
import ChallengeCard from "./ChallengeCard";
import { Redirect } from "react-router";
import { connect } from 'react-redux';
// import {showChallenge} from '../actions/challenges'

class ChallengeList extends React.Component {
  state = {
    challenges: []
  };

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/challenges`)
      .then(res => res.json())
      .then(data => this.setState({ challenges: data.challenges }));
  }

  // handleClickedCard = event => {
  //   fetch(`http://localhost:3000/api/v1/challenges/${event.target.id}`)
  //     .then(res => res.json())
  //     .then(json => showChallenge(json.challenge));
  // };

  render() {
    console.log(this.props)
    return this.props.challenge ? (
      <Redirect
        from="/challenges"
        to={`/challenges/${this.props.challenge.id}`}
      />
    ) : (
      <div className="challenge-list">
        {this.state.challenges.map(chal => (
          <ChallengeCard
            key={chal.id}
            handleClick={this.handleClickedCard}
            challenge={chal}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {user: state.users.user, showChallenge: state.challenges.showChallenge }
}

export default connect(mapStateToProps)(ChallengeList);
