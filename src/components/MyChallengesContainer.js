import React from 'react'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router'
import {connect} from 'react-redux'

class MyChallengesContainer extends React.Component {
  render() {
    
    const inProgress = this.props.user.favorites.filter(fav => fav.completed === false)
    const completed = this.props.user.favorites.filter(fav => fav.completed === true)
    
    return this.props.user.favorites !== null ? (
    <div className='my-challenges-div'>
      <div className='my-challenges'>
        <h4>In Progress</h4>
          {inProgress.map(chall => <p><Link style={{ textDecoration: 'none', color: 'black'}} to={`/users/${this.props.user.id}/challenges/${chall.challenge.id}`}>{chall.challenge.content}</Link></p>)}
      </div>
      
      <div className='my-challenges'>
        <h4>Completed</h4>
          {completed.map(chall => <p><Link to={`/users/${this.props.user.id}/challenges/${chall.challenge.id}`}>{chall.challenge.content}</Link></p>)}
      </div>
      
      <div className='my-challenges'>
        <h4>Friends</h4>
        <ul>
          <Link to='/'><li>Yamuna Of Course</li></Link>
        </ul>
      </div>
    
    </div>
  ): (<Redirect to='/'/>)
  }
}

const mapStateToProps = (state) => {
  return {...state.users}
}

export default connect(mapStateToProps)(MyChallengesContainer)