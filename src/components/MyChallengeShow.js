import React from 'react'
import {connect} from 'react-redux'
import ChallengeCard from './ChallengeCard'

class MyChallengeShow extends React.Component {
  render(){
    let wholeChallenge = this.props.user.favorites.find(fav => fav.challenge.id === parseInt(this.props.match.params.id))
    console.log(wholeChallenge)
    
    return(
      <div className='my-challenge-show-div'>
        <h1>{wholeChallenge.challenge.content}</h1>
        
        <div className='show-buttons'>
          <p id='show-rating'>Rating: {wholeChallenge.challenge.rating}/10</p>
        </div>
        
        <div className='links-div'>Links: {wholeChallenge.git_link !== null ? <a href={wholeChallenge.git_link}>{wholeChallenge.git_link}</a> : <p>no links yet</p>}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {...state.users}
}

export default connect(mapStateToProps)(MyChallengeShow)