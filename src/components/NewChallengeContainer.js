import React from 'react'
import NewChallengeForm from './NewChallengeForm'

class NewChallengeContainer extends React.Component {
  
  state = {
    showingForm: true
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    debugger
    this.setState({showingForm: false})
  }
  
  render(){
    return <div className="new-challenge-form-div"><NewChallengeForm showingForm={this.state.showingForm} handleSubmit={this.handleSubmit} /></div>
  }
}

export default NewChallengeContainer