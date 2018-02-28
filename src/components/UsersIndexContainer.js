import React from 'react'
import {connect} from 'react-redux'
import UserIndexCard from './UserIndexCard'

class UsersIndexContainer extends React.Component {
  render(){
    
    const otherUsers = this.props.allUsers.filter(user => user.id !== this.props.user.id)
    console.log(otherUsers)
    
    return(
      <div className='users-index'>
        <h1>Add Friends!</h1>
        <div className='users-index-container'>
          {otherUsers.map(user=> <UserIndexCard key={user.id} user={user}/>)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {...state.users}
}

export default connect(mapStateToProps)(UsersIndexContainer)