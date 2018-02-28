import React from 'react'
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
    fetch(`http://localhost:3000/api/v1/user_challenges/${this.props.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(console.log)
  }
  
  render() {
    console.log(this.props)
    return (
      <div className='my-challenge-form-div'>
        <label for='my-challenge-form'>Finished with this project? Submit your github and deployed links here!</label>
        <form id='my-challenge-form' className='my-challenge-form' onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type='text' className='finished-links' id='github' placeholder='Git Hub Link'/>
          <input onChange={this.handleChange} type='text' className='finished-links' id='deployed' placeholder='Deployed Link'/>
          <input id='submit-button' type='submit'/>
        </form>
      </div>
    )
  }
}

export default CompletedChallengeForm