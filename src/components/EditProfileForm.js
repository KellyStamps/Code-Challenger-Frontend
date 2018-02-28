import React from "react";

const EditProfileForm = ({ user, handleSubmit, showingForm }) => {
  return showingForm ? (
    <div className="edit-user-form">
      <p>Edit Profile</p>
      <form onSubmit={handleSubmit}>
        <input type="text-area" id="bio" placeholder={user.bio} />
        <input id="submit" type="submit"/>
      </form>
    </div>
  ): (
    <div className="edit-user-form">
      <h4>Your profile was successfully updated!</h4>
    </div>
  )
};

export default EditProfileForm;