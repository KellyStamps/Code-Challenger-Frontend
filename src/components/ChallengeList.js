import React from "react";
import ChallengeCard from "./ChallengeCard";
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';

class ChallengeList extends React.Component {
  
  state = {
    searchTerm: ''
  }
  
  handleChange = (event) => {
    this.setState({searchTerm: event.target.value.toLowerCase()})
  }
  
  renderHelper = () => {
    let list;
    if (this.state.searchTerm.length > 0) {
      list = this.props.challenges.filter(chal => chal.content.toLowerCase().includes(this.state.searchTerm))
    } else {
      list = this.props.challenges.sort((a,b) => {
        return b.rating - a.rating
      });
    }
    return list;
  }

  render() {
      return this.props.user ? (
      <div className="challenge-list">
        <div className='search'>
          <input onChange={this.handleChange} value={this.state.searchTerm} type='text' placeholder='Search Challenges...' />
        </div>
        {this.renderHelper().map(chal => (<ChallengeCard challenge={chal} key={chal.id}/>))}
        
      </div>
    ) : (
      <div className="log-in-reminder">
        <h1>Please <Link to='/'>log in</Link>  to view challenges</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {...state.users, ...state.challenges}
}

export default connect(mapStateToProps)(ChallengeList);
