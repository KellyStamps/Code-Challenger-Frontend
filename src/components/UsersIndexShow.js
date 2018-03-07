import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {ROOT, HEADERS} from '../constants/index'
import {addFriend, deleteFriend} from '../actions/users'

class UsersIndexShow extends React.Component {
  
  handleAddFriend = (event) => {
    fetch(`${ROOT}friendships`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({
        user_id: this.props.user.id,
        friend_id: this.props.match.params.id
      })
    })
    .then(res => res.json())
    .then(json => this.props.addFriend(json.friendship))
  }
  
  handleDeleteFriend = (event) => {
    let id = this.props.user.friends.find(fr => fr.friend.id === parseInt(this.props.match.params.id, 10))

    fetch(`${ROOT}friendships/${id}`, {
      method: 'DELETE',
      headers: HEADERS,
      body: JSON.stringify({
        user_id: this.props.user.id,
        friend_id: this.props.match.params.id,
        id: id
      })
    })
    .then(res => res.json())
    .then(json => this.props.deleteFriend(json.id))
  }

  render(){

    if (this.props.user) {
      let friend = this.props.allUsers.find(friend => friend.user.id === parseInt(this.props.match.params.id, 10))
      
      let projects = friend.projects.filter(proj => proj.project.completed === true)
      
      return (
        <div className='friend-show-div'>
        
          <div className='friend-headline'>
            <h1>{friend.user.username}</h1>
            
            {!!this.props.user.friends.find(fr => fr.friend.id === parseInt(this.props.match.params.id, 10)) ? <button onClick={this.handleDeleteFriend}>Delete Friend</button> : <button onClick={this.handleAddFriend}>Add Friend</button>}
            
            <h3>A little about {friend.user.username}:</h3>
            <p>{friend.user.bio}</p>
          </div>
          
          <div className='friend-challenges-div'>
            <h3>Completed Projects:</h3> 
              {projects.map(proj => {
                return (
                <div key={proj.title} className='friend-challenge-card'>
                  <h4>{proj.title}</h4>
                  <a href={`http://${proj.project.git_link}`} target='_blank'>GitHub</a>
                    <br/>
                  <a href={`http://${proj.project.live_link}`} target='_blank'>Deployed Site</a>
                </div>
              )})}
          </div>
          
        </div>
      )
    } else {
      return (
        <div className="log-in-reminder">
          <h1>Please <Link to='/'>log in</Link>  to view users</h1>
        </div>
      )
    }

  }
}


const mapStateToProps = (state) => {
  return {...state.users, ...state.challenges}
}

export default connect(mapStateToProps, {addFriend, deleteFriend})(UsersIndexShow)