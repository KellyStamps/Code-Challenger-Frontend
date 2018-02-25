import React from "react";
import EditProfileForm from './EditProfileForm'
import { Redirect } from "react-router";
import { connect } from 'react-redux';

class ProfileContainer extends React.Component {
  
  handleSubmit = (event) => {
    event.preventDefault();
    //not preventing refresh!!
    
    fetch(`http://localhost:3000/users/${this.props.user.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: event.target.username.value,
        bio: event.target.username.value
      })
    })
    .then(res => res.json())
    .then(console.log)
  }
  
  render() {
    console.log(this.prop)
    return (
      <div className="profile-container">
        <h1>{this.props.user.username}</h1>
        <h4>Joined on: {this.props.user.cake_day}</h4>
        <EditProfileForm user={this.props.user}/>
      </div>)
  }
}

const mapStateToProps = (state) => {
  return {user: state[0]}
}

export default connect(mapStateToProps) (ProfileContainer);
