import React from "react";
import LoginForm from "./LoginForm";
import ChallengeList from "./ChallengeList";
import { BrowserRouter as Router, Route, Redirect } from "react-router";

class LoggedOutHome extends React.Component {
  state = {
    challenges: []
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
      .then(json => this.props.redirectHelper(json));
  };

  loggedIn = () => {
    this.props.redirectHelper(this.state.user);
  };

  render() {
    return this.props.user ? (
      <Redirect to="/challenges" />
    ) : (
      <div className="loggedout-container">
        <ChallengeList challenges={this.state.challenges} />
        <LoginForm handleSubmit={this.handleLoginSubmit} />
        )}
      </div>
    );
  }
}

export default LoggedOutHome;
