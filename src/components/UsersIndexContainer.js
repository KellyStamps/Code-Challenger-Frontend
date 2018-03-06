import React from 'react'
import {connect} from 'react-redux'
import UserIndexCard from './UserIndexCard'

class UsersIndexContainer extends React.Component {
  
  state = {
    searchTerm: ''
  }
  
  handleChange = (event) => {
    this.setState({searchTerm: event.target.value.toLowerCase()})
  }
  
  renderHelper = () => {
    if (this.state.searchTerm.length > 0) {
      return this.props.allUsers.filter(friend => friend.user.username.toLowerCase().includes(this.state.searchTerm))
    } else {
      return this.props.allUsers.filter(user => user.user.id !== this.props.user.id)
    }
  }
  
  render(){
    
    return(
      <div className='users-index'>
        <h1>Add Friends!</h1>    
        <div className='user-search'>
          <input onChange={this.handleChange} value={this.state.searchTerm} id='search' type='text' placeholder='Search Friends...' />
        </div>
        
        <div className='users-index-container'>
          {this.renderHelper().map(user=> <UserIndexCard key={user.user.id} user={user}/>)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {...state.users}
}


export default connect(mapStateToProps)(UsersIndexContainer)