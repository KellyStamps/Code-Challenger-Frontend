import React from "react";
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'

class ChallengeShow extends React.Component {
  
  render() {
    return this.props.showChallenge && this.props.showChallenge ? (
      <div className="challenge-show">
        <h2>{this.props.showChallenge.content}</h2>
        <h4>Rating: {this.props.showChallenge.rating}/10</h4>
        <div className='links-div'>Links: {this.props.showChallenge.links !== null ? this.props.showChallenge.links.map(l => <a href={l}>{l.slice(0,4)}</a>) : <p>no links yet</p>}</div>
      </div>
    ) : (<Redirect to='/'/>)
  }
}

const mapStateToProps = (state) => {
  return {...state.users, ...state.challenges}
}

export default connect(mapStateToProps)(ChallengeShow);
