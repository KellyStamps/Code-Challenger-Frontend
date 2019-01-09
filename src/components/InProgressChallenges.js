import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import HelpfulResources from './HelpfulResources';
import { ROOT } from '../constants/index';
import CompleteChallengeForm from './CompleteChallengeForm';
import { deleteInProgressChallenge } from '../actions/users';
import '../styles/challenges/in_progress_challenges.css';

class InProgressChallenges extends React.Component {
  
  state = {
    redirect: ''
  }
  
  handleCompletedForm = (json) => {
    this.setState({redirect: "forComplete"})
  }
  
  handleClick = (wholeChallenge) => {
    fetch(`${ROOT}user_challenges/${wholeChallenge.id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(json =>{
      this.setState({redirect: "forDelete"})
      this.props.deleteInProgressChallenge(json.id)
    })
  }
  
  render(){
    if (this.state.redirect === "forDelete") {
      return <Redirect to={`/users/${this.props.user.id}/challenges`}/>
    } else if (this.state.redirect === "forComplete") {
      return <Redirect to={`/users/${this.props.user.id}/challenges/completed/${this.props.match.params.id}`}/>
    }
     if (this.props.user){
       let wholeChallenge = this.props.user.favorites.find(fav => fav.challenge.id === parseInt(this.props.match.params.id, 10))
       return (
         <div className='my-challenge-show-div'>
           <div className='my-challenge-in-progress-headline'>
             <h1>{wholeChallenge.challenge.content}</h1>
             <p id='show-rating'>Rating: {wholeChallenge.challenge.rating}/10</p>
             <button onClick={() => this.handleClick(wholeChallenge)}>Remove from My Challenges</button>
           </div>
           
           <div className='in-progress-links-div'>
             <h4>Links:</h4> 
             {wholeChallenge.challenge.links !== null ? wholeChallenge.challenge.links.split(',').map(link => <p key={link}><a href={link} target='_blank'>{link}</a></p>) : <p>no links yet</p>}
           </div>
           
           <HelpfulResources/>
           
           <CompleteChallengeForm id={wholeChallenge.id} parentSubmit={this.handleCompletedForm}/>
           
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

export default connect(mapStateToProps, { deleteInProgressChallenge })(InProgressChallenges);
