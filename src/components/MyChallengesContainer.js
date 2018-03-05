import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class MyChallengesContainer extends React.Component {
  
  render() {
    let inProgress;
    let completed;
    this.props.user && this.props.user.favorites ? (
      inProgress = this.props.user.favorites.filter(fav => fav.completed === false),
      completed = this.props.user.favorites.filter(fav => fav.completed === true)
    ) : (
      inProgress = [],
      completed = []
    )
    
    return this.props.user ? (
    <div className='my-challenges-div'>
      <div className='my-challenges'>
        <h4>In Progress</h4>
          {inProgress.map(chall => <p key={chall.challenge.id}><Link style={{ textDecoration: 'none', color: 'black'}} to={`/users/${this.props.user.id}/challenges/inprogress/${chall.challenge.id}`}>{chall.challenge.content}</Link></p>)}
      </div>
      
      <div className='my-challenges'>
        <h4>Completed</h4>
          {completed.map(chall => <p key={chall.challenge.id}><Link style={{ textDecoration: 'none', color: 'black'}} to={`/users/${this.props.user.id}/challenges/completed/${chall.challenge.id}`}>{chall.challenge.content}</Link></p>)}
      </div>
      
      <div className='my-challenges'>
        <h4>Friends</h4>
          {this.props.user.friends ? 
          this.props.user.friends.map(friend => <p key={friend.friend.id}><Link style={{ textDecoration: 'none', color: 'black'}} to={`/users/all/${friend.friend.id}`}>{friend.friend.username}</Link></p>) : null}
      </div>
    
    </div>
  ): (
    <div className="log-in-reminder"><h1>Please <Link to='/'>log in</Link>  to view challenges</h1></div>
  )
  }
}

const mapStateToProps = (state) => {
  return {...state.users}
}

export default connect(mapStateToProps)(MyChallengesContainer)