import React from "react";

const NewChallengeForm = ({ handleSubmit, showingForm }) => {
  return showingForm ? (
    <div className="new-challenge-form">
      <h2>Create a New Challenge</h2>
      <form id='new-form' onSubmit={handleSubmit}>
        <p>Describe the project in one sentence...</p>
        <textarea id="content" cols="40" rows="3" wrap="soft"/>
        <p>Include some helpful links to get people started!</p>
        <textarea id="links" cols="40" rows="3" wrap="soft"/>
        <input id="new-submit" type="submit" />
      </form>
      
    </div>
  ): (
    <div className="new-challenge-form">
      <h4>Thanks for submitting a new project idea!</h4>
    </div>
  )
};

export default NewChallengeForm;