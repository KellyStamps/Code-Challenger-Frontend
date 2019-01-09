import React from "react";
import { connect } from 'react-redux';
import { addUser } from '../actions/users';
import { ROOT, HEADERS } from '../constants/index';
import '../styles/forms/login_form.css';

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
    if (this.state.username.length > 0 && this.state.password.length > 0) {
      fetch(`${ROOT}auth`, {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        })
      })
        .then(res => res.json())
        .then(json => {
          this.props.addUser(json.user)
          localStorage.setItem('jwt', json.jwt)
        });
    } else {
      this.setState({error: true})
    }
  };
  
  render() {
    return (
      <div className="loginform">
      {this.state.error ? <p className='error-message'>Please provide a username and password to login</p> : null}
        <h3>Login or Sign Up to Start!</h3>
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

export default connect(null, { addUser }) (LoginForm);
