import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/users/user_card.css';

const UserCard = ({ user }) => {
  return(
    <div className='user-index-card'>
      <Link to={`/users/all/${user.user.id}`}><h4>{user.user.username}</h4></Link>
      <p>{user.user.bio}</p>
    </div>
  )
}

export default UserCard;
