import React from "react";
import {connect} from 'react-redux';
import {addUser} from '../actions/users';
import {ROOT, HEADERS} from '../constants/index'

class LoginForm extends React.Component {
  
  state = {
    username: '',
    password: '',
    error: false
  }
  
  handleChange = (event) => {
    const {value, name} = event.target;
    this.setState({
      [name]: value
    })
  }
  
  handleSubmit = event => {
    event.preventDefault();
    fetch(`${ROOT}users`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
      .then(res => res.json())
      .then(json => {
        json.status === 500 ? this.setState({error: true}) : this.props.addUser(json)
      });
  };
  
  render() {
    return (
      <div className="loginform">
        <h3>Login or Sign Up to Start!</h3>
        {this.state.error ? <h3 className='error'>Username or Password Incorrect</h3> : null}
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            name="username" 
            id="username" 
            placeholder="username" 
            onChange={this.handleChange} value={this.state.username} />
          <input 
            type="password" 
            id="password"
            placeholder="password" 
            name="password" onChange={this.handleChange} value={this.state.password} />
          <input id="submit" type="submit" value="Login" />
        </form>
      </div>
    );
  } 
};

export default connect(null, {addUser}) (LoginForm);
