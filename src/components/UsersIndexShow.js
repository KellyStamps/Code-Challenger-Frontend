import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {addFriend, deleteFriend} from '../actions/users'

class UsersIndexShow extends React.Component {
  
  handleAddFriend = (event) => {
    fetch(`http://localhost:3000/api/v1/friendships`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: this.props.user.id,
        friend_id: this.props.match.params.id
      })
    })
    .then(res => res.json())
    .then(json => this.props.addFriend(json.friendship))
  }
  
  handleDeleteFriend = (event) => {
    let id = this.props.user.friends.find(fr => fr.friend.id === parseInt(this.props.match.params.id))

    fetch(`http://localhost:3000/api/v1/friendships/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
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
    let friend;
    let projects;

    this.props.user ? (
      friend = this.props.allUsers.find(friend => friend.user.id === parseInt(this.props.match.params.id)),
      
      projects = friend.projects.filter(proj => proj.project.completed === true)
      ) : (<div className="log-in-reminder"><h1>Please <Link to='/'>log in</Link>  to view challenges</h1></div>)

    return this.props.user ? (
      <div className='friend-show-div'>
      
        <div className='friend-headline'>
          <h1>{friend.user.username}</h1>
          
          {!!this.props.user.friends.find(fr => fr.friend.id === parseInt(this.props.match.params.id)) ? <button onClick={this.handleDeleteFriend}>Delete Friend</button> : <button onClick={this.handleAddFriend}>Add Friend</button>}
          
          <h3>A little about {friend.user.username}:</h3>
          <p>{friend.user.bio}</p>
        </div>
        
        <div className='friend-challenges-div'>
          <h3>Completed Projects:</h3> 
            {projects.map(proj => {
              return (
                <div className='friend-challenge-card'>
                  <h4>{proj.title}</h4>
                  <a href={`http://${proj.project.git_link}`}>GitHub</a>
                  <br/>
                  <a href={`http://${proj.project.live_link}`}>Deployed Site</a>
                </div>
                )})}
        </div>
        
      </div>
    ) : (
      <div className="log-in-reminder"><h1>Please <Link to='/'>log in</Link>  to view challenges</h1></div>
    )
  }
}


const mapStateToProps = (state) => {
  return {...state.users, ...state.challenges}
}

export default connect(mapStateToProps, {addFriend, deleteFriend})(UsersIndexShow)