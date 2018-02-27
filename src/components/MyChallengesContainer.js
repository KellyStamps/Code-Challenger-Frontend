import React from 'react'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router'
import {connect} from 'react-redux'

class MyChallengesContainer extends React.Component {
  render() {
    
    const inProgress = this.props.user.favorites.filter(fav => fav.completed == false)
    const completed = this.props.user.favorites.filter(fav => fav.completed == true)
    
    // debugger
    return this.props.user.favorites !== null ? (
    <div className='my-challenges-div'>
      <div className='my-challenges'>
        <h4>In Progress</h4>
        <ul>    
          {inProgress.map(chall => <li>{chall.challenge.content}</li>)}
        </ul>
      </div>
      
      <div className='my-challenges'>
        <h4>Completed</h4>
        <ul>
          {completed.map(chall => <li>{chall.challenge.content}</li>)}
          // <Link to='/'><li>So cool too</li></Link>
        </ul>
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