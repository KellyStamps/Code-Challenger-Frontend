import React from 'react'
import NewChallengeForm from './NewChallengeForm'
import {connect} from 'react-redux'
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
    return <div className="new-challenge-form-div"><NewChallengeForm showingForm={this.state.showingForm} handleSubmit={this.handleSubmit} /></div>
  }
}

export default connect(null,{addChallenge})(NewChallengeContainer) 