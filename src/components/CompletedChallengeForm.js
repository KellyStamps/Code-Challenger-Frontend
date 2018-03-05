import React from 'react'
import {ROOT, HEADERS} from '../constants/index'
import {completeChallenge} from '../actions/users'
import {connect} from 'react-redux'

class CompletedChallengeForm extends React.Component {
  
  state = {
    github: '',
    deployed: ''
  }
  
  handleChange = (event) => {
    const {value, id} = event.target;
    this.setState({
      [id]: value
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    const body = {
      git_link: this.state.github,
      live_link: this.state.deployed
    } 
    console.log(this.props.id)
    fetch(`${ROOT}user_challenges/${this.props.id}`, {
      method: 'PATCH',
      headers: HEADERS,
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(json => {
      this.props.parentSubmit(event),
      this.props.completeChallenge(json.challenge)})
  }
  
  render() {

    return (
      <div className='my-challenge-form-div'>
        <label for='my-challenge-form'>Finished with this project? Submit your github and deployed links here!</label>
        <form id='my-challenge-form' className='my-challenge-form' onSubmit={this.handleSubmit}>
          <p>GitHub.com/YourRepoName</p>
          <input onChange={this.handleChange} type='text' className='finished-links' id='github' />
          <p>Your-File-Name.HerokuApp.com</p>
          <input onChange={this.handleChange} type='text' className='finished-links' id='deployed'/>
          <input id='submit-button' type='submit'/>
        </form>
      </div>
    )
  }
}

export default connect(null,{completeChallenge}) (CompletedChallengeForm)