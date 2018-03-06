import React from 'react'
import NewChallengeForm from './NewChallengeForm'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {ROOT, HEADERS} from '../constants/index'
import {addChallenge} from '../actions/challenges'

class NewChallengeContainer extends React.Component {
  
  state = {
    showingForm: true
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({showingForm: false})
    fetch(`${ROOT}challenges`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({
        content: event.target.content.value,
        links: event.target.links.value,
      })
    })
    .then(res => res.json())
    .then(json => this.props.addChallenge(json.challenge))
  }
  
  render(){
    
    if (this.props.user) {
      return (
        <div className="new-challenge-form-div">
          <NewChallengeForm showingForm={this.state.showingForm} handleSubmit={this.handleSubmit} />
        </div>
      )
    } else {
      return (
        <div className="log-in-reminder">
          <h1>Please <Link to='/'>log in</Link>  to view challenges</h1>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {...state.users}
}

export default connect(mapStateToProps,{addChallenge})(NewChallengeContainer) 