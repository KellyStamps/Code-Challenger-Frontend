import React from "react";
import '../styles/forms/create_challenge_form.css';

const CreateChallengeForm = ({ handleSubmit, showingForm, error }) => {
  return showingForm ? (
    <div className="create-challenge__form-container">
    
      {error && error === 'content' ? <h3 className='error-message'>Project description cannot be blank</h3> : null}
      
      {error && error === 'links' ? <h3 className='error-message'>Separate links with a comma and a space</h3> : null}
      
      {error && error === 'http' ? <h3 className='error-message'>Please begin your links with "http://"</h3> : null}
      
      <h2 className="create-challenge__form-headline">Create a New Challenge</h2>
      <form id='new-form' onSubmit={handleSubmit}>
        <p>Describe the project in one sentence...</p>
        <textarea className="create-challenge__form-textarea" id="content" cols="40" rows="3" wrap="soft"/>
        <p>Include some helpful links to get people started!</p>
        <textarea id="links" cols="40" rows="3" wrap="soft"/>
        <input className="create-challenge__form-submit" id="new-submit" type="submit" />
      </form>
    </div>
  ) : (
    <div className="create-challenge__form-container">
      <h4 className="create-challenge__form-headline">Thanks for submitting a new project idea!</h4>
    </div>
  )
};

export default CreateChallengeForm;
