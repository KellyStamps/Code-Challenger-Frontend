import React from 'react'

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
    .then(json => this.props.parentSubmit(json))
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

export default CompletedChallengeForm