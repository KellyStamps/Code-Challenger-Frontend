import React from "react";
import LoginForm from "./LoginForm";
import ChallengeList from "./ChallengeList";

class MainContainer extends React.Component {
  state = {
    challenges: [],
    user: null
  };

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/challenges`)
      .then(res => res.json())
      .then(data => this.setState({ challenges: data.challenges }));
  }

  render() {
    return (
      <div className="main-container">
        <ChallengeList challenges={this.state.challenges} />
        <LoginForm />
      </div>
    );
  }
}

export default MainContainer;
