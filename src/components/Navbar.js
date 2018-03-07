import React from "react";
import { Link} from "react-router-dom";
import {connect} from 'react-redux';

const NavBar = ({ user, visitProfile }) => {
  return user == null ? (
    <div className="navbar">
      <h1>CODE CHALLENGER</h1>
    </div>
  ) : (
    <div className="navbar">
      <h1>CODE CHALLENGER</h1>
      <ul>
        <li><Link to={`/users/${user.id}/challenges`}>MY CHALLENGES</Link></li>
        <li><Link to={`/users/${user.id}`}>MY PROFILE</Link></li>
        <li><Link to={`/challenges`}>ALL CHALLENGES</Link></li>
        <li><Link to={`/users/all`}>FIND FRIENDS</Link></li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {user: state.users.user}
}

export default connect(mapStateToProps)(NavBar);
