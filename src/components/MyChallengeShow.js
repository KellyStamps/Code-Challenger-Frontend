import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ChallengeCard from './ChallengeCard'

class MyChallengeShow extends React.Component {
  render(){
    
    let wholeChallenge;
    
    this.props.user ? (
      wholeChallenge = this.props.user.favorites.find(fav => fav.challenge.id === parseInt(this.props.match.params.id))
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
        
        <div className='helpful-resources-div'>
          <p>Helpful resources:</p>
          <p>Create a github account to host your code: <a href='https://github.com/' target='_blank'>Github.com</a></p>
          <p>How to put your project onto Github: <a href='https://stackoverflow.com/questions/12799719/how-to-upload-a-project-to-github' target='_blank'>Stack Overflow</a></p>
          <p>Create a Heroku account to deploy your project: <a href='https://heroku.com/' target='_blank'>Heroku.com</a></p>
          <p>How to deploy your project on Heroku: <a href='https://devcenter.heroku.com/articles/git' target='_blank'>Heroku.com</a></p>
          <p>Pro tip: when in doubt, Google, YouTube, and Stack Overflow are your friends! </p>
        </div>
        
        <div className='my-challenge-form-div'>
          <label for='my-challenge-form'>Finished with this project? Submit your github and deployed links here!</label>
          <form id='my-challenge-form' className='my-challenge-form'>
            <input type='text' className='finished-links' id='github' placeholder='Git Hub Link'/>
            <input type='text' className='finished-links' id='deployed' placeholder='Deployed Link'/>
            <input id='submit-button' type='submit'/>
          </form>
        </div>
      </div>
    ) : (
      <div className="log-in-reminder"><h1>Please <Link to='/'>log in</Link>  to view challenges</h1></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {...state.users}
}

export default connect(mapStateToProps)(MyChallengeShow)