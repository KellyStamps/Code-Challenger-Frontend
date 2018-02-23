import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ user, visitProfile }) => {
  return user == null ? (
    <div className="navbar">
      <h1>CODE CHALLENGER</h1>
    </div>
  ) : (
    <div className="navbar">
      <h1>CODE CHALLENGER</h1>
      <ul>
        <li><Link to={`/users/${user.id}`}>My Profile</Link></li>
        <li><Link to={`/challenges`}>Challenges</Link></li>
      </ul>
    </div>
  );
};
export default NavBar;
