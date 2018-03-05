import React from "react";
import ChallengeCard from "./ChallengeCard";
import ChallengeSorters from "./ChallengeSorters";
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';

class ChallengeList extends React.Component {
  
  state = {
    searchTerm: '',
    checked: false
  }
  
  handleChange = (event) => {
    if (event.target.id === 'search') {
      this.setState({searchTerm: event.target.value.toLowerCase()})
    } else {
        this.setState({checked: event.target.checked})
    }
  }
  
  renderHelper = () => {
    let list;
    if (this.state.searchTerm.length > 0) {
      list = this.props.challenges.filter(chal => chal.content.toLowerCase().includes(this.state.searchTerm))
    } else {
      if (this.state.checked){
        let faveIds = this.props.user.favorites.map(fav => fav.challenge.id)
        
        let allChallengeIds = this.props.challenges.map(chal => chal.id)
        
        let ids = allChallengeIds.filter(function(n) {
          return faveIds.indexOf(n) === -1;
        })
        
        list = this.props.challenges.filter(chal => {
            return ids.indexOf(chal.id) > -1	
        }).sort((a,b) => {
          return b.rating - a.rating
        });
      } else {
        list = this.props.challenges.sort((a,b) => {
          return b.rating - a.rating
        });
      }
    }
    return list;
  }

  render() {
      return this.props.user ? (
      <div className="challenge-list">
        
        <ChallengeSorters searchTerm={this.state.searchTerm} handleChange={this.handleChange}/>
        
        {this.renderHelper().map(chal => (<ChallengeCard challenge={chal} key={chal.id}/>))}
        
      </div> ) : (
      <div className="log-in-reminder">
        <h1>Please <Link to='/'>log in</Link>  to view challenges</h1>
      </div>)
  }
}

const mapStateToProps = (state) => {
  return {...state.users, ...state.challenges}
}

export default connect(mapStateToProps)(ChallengeList);
