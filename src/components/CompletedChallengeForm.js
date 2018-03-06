import React from 'react'
import {ROOT, HEADERS} from '../constants/index'
import {completeChallenge} from '../actions/users'
import {connect} from 'react-redux'

class CompletedChallengeForm extends React.Component {
  
  state = {
    github: '',
    deployed: '',
    error: false
  }
  
  handleChange = (event) => {
    const {value, id} = event.target;
    this.setState({
      [id]: value
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    
    if (this.state.github.length > 0 && this.state.deployed.length > 0) {
      this.setState({error: false})
      const body = {
        git_link: this.state.github,
        live_link: this.state.deployed
      } 

      fetch(`${ROOT}user_challenges/${this.props.id}`, {
        method: 'PATCH',
        headers: HEADERS,
        body: JSON.stringify(body)
      })
      .then(res => res.json())
      .then(json => {
        this.props.completeChallenge(json.challenge)
        this.props.parentSubmit(event)
      })
    } else {
      this.setState({error: true})
    }
    
  }
  
  render() {

    return (
      <div className='my-challenge-form-div'>
        {this.state.error ? <h3 className='error-headline'>Please submit both links to complete challenge</h3> : null}
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