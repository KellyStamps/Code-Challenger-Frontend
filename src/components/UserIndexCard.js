import React from 'react'

const UserIndexCard = ({user}) => {
  return(
    <div className='user-index-card'>
      <h4>{user.username}</h4>
      <p>{user.bio}</p>
    </div>
  )
}

export default UserIndexCard