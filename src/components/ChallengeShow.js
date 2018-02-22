import React from "react";

class ChallengeShow extends React.Component {
  state = {
    challenge: null
  };

  componentDidMount() {
    fetch(
      `http://localhost:3000/api/v1/challenges/${this.props.location.pathname.slice(
        12
      )}`
    )
      .then(res => res.json())
      .then(json => this.setState({ challenge: json.challenge }));
  }

  render() {
    console.log(this.state.challenge);
    return this.state.challenge ? (
      <div className="challenge-show">
        <h2>{this.state.challenge.content}</h2>
        <h4>Rating: {this.state.challenge.rating}/10</h4>
      </div>
    ) : (
      <div />
    );
  }
}

export default ChallengeShow;
