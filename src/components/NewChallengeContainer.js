import React from 'react'
import NewChallengeForm from './NewChallengeForm'
import {connect} from 'react-redux'
import {addChallenge} from '../actions/challenges'

class NewChallengeContainer extends React.Component {
  
  state = {
    showingForm: true
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({showingForm: false})
    fetch(`http://localhost:3000/api/v1/challenges`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
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