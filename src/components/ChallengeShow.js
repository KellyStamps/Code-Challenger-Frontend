import React from "react";
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class ChallengeShow extends React.Component {
  
  render() {
    return this.props.showChallenge && this.props.user ? (
      <div className="challenge-show">
        <h2>{this.props.showChallenge.content}</h2>
        <h4>Rating: {this.props.showChallenge.rating}/10</h4>
        <div className='links-div'>Links: {this.props.showChallenge.links !== null ? this.props.showChallenge.links.map(l => <a href={l}>{l.slice(0,4)}</a>) : <p>no links yet</p>}</div>
      </div>
    ) : (
      <div className="challenge-show-error"><h1>Please <Link to='/'>log in</Link>  to view challenges</h1></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {...state.users, ...state.challenges}
}

export default connect(mapStateToProps)(ChallengeShow);
