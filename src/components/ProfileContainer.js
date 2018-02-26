import React from "react";
import EditProfileForm from './EditProfileForm'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class ProfileContainer extends React.Component {
  
  renderFavorites = () => {
    let allChallenges = this.props.challenges 
    let favoritesList = this.props.user.favorites 
    
    let returned = () => {
      return favoritesList.map(favorite => allChallenges.filter(chal => chal.id === favorite.challenge_id))
    } 
    console.log(returned());
  }
  
  render() {
    console.log(this.props)
    return this.props.user ? (
      <div className="profile-container">
        <h1>{this.props.user.username}</h1>
        <h4>Joined on: {this.props.user.cake_day}</h4>
        <div>Faves: {this.renderFavorites()}</div>
        <EditProfileForm user={this.props.user}/>
      </div>) : (
        <div className="profile-container"><h1>Please <Link to='/'>log in</Link>  to view profile</h1></div>
      )
  }
}

const mapStateToProps = (state) => {
  return {...state.users, ...state.challenges}
}

export default connect(mapStateToProps) (ProfileContainer);
