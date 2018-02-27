import React from "react";
import EditProfileForm from './EditProfileForm'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class ProfileContainer extends React.Component {
  
  handleUserEdit = (event) => {
    event.preventDefault()
    let body = {
      username: event.target.username.value,
      bio: event.target.bio.value
    }

    fetch(`http://localhost:3000/api/v1/users/${this.props.match.params.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(console.log)
  }
  
  render() {
    console.log(this.props)
    return this.props.user ? (
      <div className="profile-container">
        <div className='basic-info'>
          <h1>{this.props.user.username}</h1>
          <h4>Joined on: {this.props.user.cake_day}</h4>
          <h4>Biography: "{this.props.user.bio}"</h4>
        </div>
        <EditProfileForm user={this.props.user} handleSubmit={this.handleUserEdit}/>
      </div>) : (
        <div className="log-in-reminder"><h1>Please <Link to='/'>log in</Link>  to view profile</h1></div>
      )
  }
}

const mapStateToProps = (state) => {
  return {...state.users, ...state.challenges}
}

export default connect(mapStateToProps) (ProfileContainer);
