import React from 'react'

const HelpfulResources = () => {
  return (
    <div className='helpful-resources-div'>
      <p>Helpful resources:</p>
      <p>Create a github account to host your code: <a href='https://github.com/' target='_blank'>Github.com</a></p>
      <p>How to put your project onto Github: <a href='https://stackoverflow.com/questions/12799719/how-to-upload-a-project-to-github' target='_blank'>Stack Overflow</a></p>
      <p>Create a Heroku account to deploy your project: <a href='https://heroku.com/' target='_blank'>Heroku.com</a></p>
      <p>How to deploy your project on Heroku: <a href='https://devcenter.heroku.com/articles/git' target='_blank'>Heroku.com</a></p>
      <p>Pro tip: when in doubt, Google, YouTube, and Stack Overflow are your friends! </p>
    </div>  
  )
}

export default HelpfulResources;