import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class MyChallengesContainer extends React.Component {
  render() {

    return (
    <div className='my-challenges-div'>
      <div className='my-challenges'>
        <h4>In Progress</h4>
        <ul>
          <Link to='/'><li>Cool Thing</li></Link>
        </ul>
      </div>
      
      <div className='my-challenges'>
        <h4>Completed</h4>
        <ul>
          <Link to='/'><li>So cool too</li></Link>
        </ul>
      </div>
      
      <div className='my-challenges'>
        <h4>Friends</h4>
        <ul>
          <Link to='/'><li>Yamuna Of Course</li></Link>
        </ul>
      </div>
    
    </div>
  )}
}

const mapStateToProps = (state) => {
  return {...state.users}
}

export default connect(mapStateToProps)(MyChallengesContainer)