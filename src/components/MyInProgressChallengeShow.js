import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import HelpfulResources from './HelpfulResources'
import CompletedChallengeForm from './CompletedChallengeForm'
import {completeChallenge} from '../actions/challenges'

class MyInProgressChallengeShow extends React.Component {
  
  handleCompletedForm = (json) => {
    // this.props.completeChallenge(json.challenge)
  }
  
  render(){
    // console.log(this.props.user)
    let wholeChallenge;
    this.props.user ? (
      wholeChallenge = this.props.user.favorites.find(fav => fav.challenge.id === parseInt(this.props.match.params.id, 10))
    ) : null
    
    return this.props.user ? (
      <div className='my-challenge-show-div'>
        <div className='my-challenge-headline'>
          <h1>{wholeChallenge.challenge.content}</h1>
          <p id='show-rating'>Rating: {wholeChallenge.challenge.rating}/10</p>
        </div>
        
        <div className='links-div'>
          <p>Links:</p> 
          {wholeChallenge.challenge.links !== null ? wholeChallenge.challenge.links.split(',').map(link => <p><a href={link} target='_blank'>{link}</a></p>) : <p>no links yet</p>}
        </div>
        
        <HelpfulResources/>
        
        <CompletedChallengeForm id={parseInt(wholeChallenge.id, 10)} parentSubmit={this.handleCompletedForm}/>
        
      </div>
    ) : (
      <div className="log-in-reminder"><h1>Please <Link to='/'>log in</Link>  to view challenges</h1></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {...state.users}
}

export default connect(mapStateToProps, {completeChallenge})(MyInProgressChallengeShow)