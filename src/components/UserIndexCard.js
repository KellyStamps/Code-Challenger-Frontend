import React from 'react'
import {Link} from 'react-router-dom'

const UserIndexCard = ({user}) => {
  console.log(user)
  return(
    <div className='user-index-card'>
      <Link to={`/users/all/${user.user.id}`}><h4>{user.user.username}</h4></Link>
      <p>{user.user.bio}</p>
    </div>
  )
}

export default UserIndexCard