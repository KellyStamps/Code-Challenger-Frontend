import React from "react";

const EditProfileForm = ({ user, handleSubmit }) => {
  return (
    <div className="edit-user-form">
      <p>Edit Profile</p>
      <form onSubmit={handleSubmit}>
        <input type="text" id="username" placeholder={user.username} />
        <input type="bio" id="bio" placeholder='short bio' />
        <input id="submit" type="submit"/>
      </form>
    </div>
  );
};

export default EditProfileForm;