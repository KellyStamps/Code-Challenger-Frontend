import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/mychallenges.css';

class MyChallengesContainer extends React.Component {
  
  render() {
    if (this.props.user && this.props.user.favorites) {
      let inProgress = this.props.user.favorites.filter(fav => fav.completed === false)
      let completed = this.props.user.favorites.filter(fav => fav.completed === true)
      
      return (
        <div className='my-challenges-div'>
          <div className='my-challenges'>
            <h3>In Progress</h3>
              {inProgress.map(chall => <p key={chall.challenge.id}><Link style={{ textDecoration: 'none', color: 'black'}} to={`/users/${this.props.user.id}/challenges/inprogress/${chall.challenge.id}`}>{chall.challenge.content}</Link></p>)}
          </div>
          
          <div className='my-challenges'>
            <h3>Completed</h3>
              {completed.map(chall => <p key={chall.challenge.id}><Link style={{ textDecoration: 'none', color: 'black'}} to={`/users/${this.props.user.id}/challenges/completed/${chall.challenge.id}`}>{chall.challenge.content}</Link></p>)}
          </div>
          
          <div className='my-challenges'>
            <h3>Friends</h3>
              {this.props.user.friends ? 
              this.props.user.friends.map(friend => <p key={friend.friend.id}><Link style={{ textDecoration: 'none', color: 'black'}} to={`/users/all/${friend.friend.id}`}>{friend.friend.username}</Link></p>) : null}
          </div>
        
        </div>
      )
    } else {
      return (
        <div className="log-in-reminder"><h1>Please <Link to='/'>log in</Link>  to view challenges</h1></div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {...state.users}
}

export default connect(mapStateToProps)(MyChallengesContainer);
