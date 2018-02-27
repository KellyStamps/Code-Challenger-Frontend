import React from "react";
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class ChallengeShow extends React.Component {

  handleClick = (event) => {
    switch (event.target.id) {
      case 'favorite':
        return this.saveChallenge();
      case 'upvote':
        return this.upvoteChallenge();
      case 'downvote':
        return this.downvoteChallenge();
      default:
        return console.log('sorry!')
    }
  }
  
  saveChallenge = () => {
    fetch(`http://localhost:3000/api/v1/user_challenges`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: this.props.user.id,
        challenge_id: this.props.showChallenge.id
      })
    })
    .then(res => res.json())
    .then(console.log)
  }
  
  upvoteChallenge = () => {
    let rating = parseInt(this.props.showChallenge.rating)
    if (rating < 10 ) {
      let newRating = rating+=1
      fetch(`http://localhost:3000/api/v1/challenges/${this.props.showChallenge.id}`, {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          rating: newRating
        })
      })
      .then(console.log)
    }
  }
  
  downvoteChallenge = () => {

    let rating = parseInt(this.props.showChallenge.rating)
    if (rating > 0 ) {
      let newRating = rating-=1
      fetch(`http://localhost:3000/api/v1/challenges/${this.props.showChallenge.id}`, {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          rating: newRating
        })
      })
      .then(res => res.json())
      .then(console.log)
    }
  }
  
  render() {
    console.log(this.props)
    return this.props.showChallenge && this.props.user ? (
      <div className="challenge-show">
        <h1>{this.props.showChallenge.content}</h1>
        
        <div className='show-buttons'>
          <i onClick={this.handleClick} id='favorite' className="material-icons">favorite</i>
          <i onClick={this.handleClick} id='upvote' className="material-icons">arrow_upward</i>
          <i onClick={this.handleClick} id='downvote' className="material-icons">arrow_downward</i>
          <p id='show-rating'>Rating: {this.props.showChallenge.rating}/10</p>
        </div>
        
        <div className='links-div'>Links: {this.props.showChallenge.links !== null ? this.props.showChallenge.links.map(l => <a href={l}>{l.slice(0,4)}</a>) : <p>no links yet</p>}</div>
      </div>
    ) : (
      <div className="log-in-reminder"><h1>Please <Link to='/'>log in</Link>  to view challenges</h1></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {...state.users, ...state.challenges, ...state.showChallenge}
}

export default connect(mapStateToProps)(ChallengeShow);
