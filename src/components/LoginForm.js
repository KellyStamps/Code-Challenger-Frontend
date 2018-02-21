import React from "react";

const LoginForm = ({ handleSubmit }) => {
  return (
    <div className="loginform">
      <p>Login or Sign Up to Start!</p>
      <form onSubmit={handleSubmit}>
        <input type="text" id="username" placeholder="username" />
        <input type="password" id="password" placeholder="password" />
        <input id="submit" type="submit" value="Login" />
      </form>
    </div>
  );
};
export default LoginForm;
