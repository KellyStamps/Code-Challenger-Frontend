import React from "react";
import LoginForm from "./LoginForm";
import ChallengeList from "./ChallengeList";
import {connect} from 'react-redux'

class LoggedOutHome extends React.Component {
  // state = {
  //   challenges: []
  // };
  // 
  // componentDidMount() {
  //   fetch(`http://localhost:3000/api/v1/challenges`)
  //     .then(res => res.json())
  //     .then(data => this.setState({ challenges: data.challenges }));
  // }

  render() {
    return (
      <div className="loggedout-container">
        <ChallengeList challenges={this.props.challenges} />
        {this.props.user == null ? <LoginForm /> : null }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {user: state.users.user}
}

export default connect (mapStateToProps)(LoggedOutHome);
