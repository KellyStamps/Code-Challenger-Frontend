import React from "react";
import EditProfileForm from './EditProfileForm'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class ProfileContainer extends React.Component {
  
  render() {
    return this.props.user ? (
      <div className="profile-container">
        <h1>{this.props.user.username}</h1>
        <h4>Joined on: {this.props.user.cake_day}</h4>
        <EditProfileForm user={this.props.user}/>
      </div>) : (
        <div className="profile-container"><h1>Please <Link to='/'>log in</Link>  to view profile</h1></div>
      )
  }
}

const mapStateToProps = (state) => {
  return {user: state.users.user}
}

export default connect(mapStateToProps) (ProfileContainer);
