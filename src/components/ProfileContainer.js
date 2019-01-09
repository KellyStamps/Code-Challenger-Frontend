import React from "react";
import EditProfileForm from './EditProfileForm';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {ROOT, HEADERS} from '../constants/index';
import {updateUser} from '../actions/users';

class ProfileContainer extends React.Component {
  
  state = {
    editFormShown: true
  }
  
  handleUserEdit = (event) => {
    event.preventDefault()
    let body = {
      bio: event.target.bio.value
    }

    fetch(`${ROOT}users/${this.props.match.params.id}`, {
      method: 'PATCH',
      headers: HEADERS,
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(json => {
      this.setState({editFormShown: false})
      this.props.updateUser(json)
    })
  }
  
  render() {
    return this.props.user ? (
      <div className="profile-container">
        <div className='basic-info'>
          <h1>{this.props.user.username}</h1>
          <h4>Joined on: {this.props.user.cake_day}</h4>
          <h4>Biography: "{this.props.user.bio}"</h4>
        </div>
        <EditProfileForm user={this.props.user} handleSubmit={this.handleUserEdit} showingForm={this.state.editFormShown}/>
      </div>) : (
        <div className="log-in-reminder"><h1>Please <Link to='/'>log in</Link>  to view profile</h1></div>
      )
  }
}

const mapStateToProps = (state) => {
  return {...state.users, ...state.challenges}
}

export default connect(mapStateToProps, { updateUser }) (ProfileContainer);
