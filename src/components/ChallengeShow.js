import React from "react";
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class ChallengeShow extends React.Component {

  handleClick = (event) => {
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
  
  render() {
    console.log(this.props)
    return this.props.showChallenge && this.props.user ? (
      <div className="challenge-show">
        <h1>{this.props.showChallenge.content}</h1>

        <h4 onClick={this.handleClick} className='add-to-faves'>❤️ Save this Project</h4>
        <h4 id='show-rating'>Rating: {this.props.showChallenge.rating}/10</h4>
        <div className='links-div'>Links: {this.props.showChallenge.links !== null ? this.props.showChallenge.links.map(l => <a href={l}>{l.slice(0,4)}</a>) : <p>no links yet</p>}</div>
      </div>
    ) : (
      <div className="challenge-show-error"><h1>Please <Link to='/'>log in</Link>  to view challenges</h1></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {...state.users, ...state.challenges, ...state.showChallenge}
}

export default connect(mapStateToProps)(ChallengeShow);
