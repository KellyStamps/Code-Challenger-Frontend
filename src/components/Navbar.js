import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';

const NavBar = ({ user, visitProfile }) => {
  console.log(this.props)
  return user == undefined ? (
    <div className="navbar">
      <h1>CODE CHALLENGER</h1>
    </div>
  ) : (
    <div className="navbar">
      <h1>CODE CHALLENGER</h1>
      <ul>
        <li><Link to={`/users/${user.id}`}>MY PROFILE</Link></li>
        <li><Link to={`/challenges`}>CHALLENGES</Link></li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {user: state[0]}
}

export default connect(mapStateToProps)(NavBar);
