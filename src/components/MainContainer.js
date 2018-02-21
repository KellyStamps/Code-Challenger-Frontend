import React from "react";
import LoginForm from "./LoginForm";
import ChallengeList from "./ChallengeList";

class MainContainer extends React.Component {
  state = {
    challenges: [],
    showing: "home",
    user: null
  };

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/challenges`)
      .then(res => res.json())
      .then(data => this.setState({ challenges: data.challenges }));
  }

  handleLoginSubmit = event => {
    event.preventDefault();
    fetch(`http://localhost:3000/api/v1/users`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: event.target.username.value,
        password: event.target.password.value
      })
    })
      .then(res => res.json())
      .then(json => this.setState({ user: json }));
  };

  render() {
    return (
      <div className="main-container">
        <ChallengeList challenges={this.state.challenges} />

        {this.state.user ? null : (
          <LoginForm handleSubmit={this.handleLoginSubmit} />
        )}
      </div>
    );
  }
}

export default MainContainer;
