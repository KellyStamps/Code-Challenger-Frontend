import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class UsersIndexShow extends React.Component {

  render(){
    
    let friend;
    let projects;
    this.props.user ? (
      friend = this.props.allUsers.find(friend => friend.user.id === parseInt(this.props.match.params.id)),
      
      projects = friend.projects.filter(proj => proj.project.completed === true)
      ) : (<div className="log-in-reminder"><h1>Please <Link to='/'>log in</Link>  to view challenges</h1></div>)
      debugger

    return this.props.user ? (
      <div className='friend-show-div'>
      
        <div className='friend-headline'>
          <h1>{friend.user.username}</h1>
          <button>Add Friend</button>
          <h3>A little about {friend.user.username}:</h3>
          <p>{friend.user.bio}</p>
        </div>
        
        <div className='friend-challenges-div'>
          <h3>Completed Projects:</h3> 
            {projects.map(proj => {
              return (
                <div className='friend-challenge-card'>
                  <h4>{proj.title}</h4>
                  <a href={`http://${proj.project.git_link}`}>GitHub</a>
                  <br/>
                  <a href={`http://${proj.project.live_link}`}>Deployed Site</a>
                </div>
                )})}
        </div>
        
      </div>
    ) : (
      <div className="log-in-reminder"><h1>Please <Link to='/'>log in</Link>  to view challenges</h1></div>
    )
  }
}


// {wholeChallenge.git_link && wholeChallenge.live_link  !== null ? (
//   <div>
//     <p>
//       <a href={`http://${wholeChallenge.git_link}`} target='_blank'>{wholeChallenge.git_link }</a>
//     </p>
//     <p>
//       <a href={wholeChallenge.live_link} target='_blank'>{wholeChallenge.live_link }</a>
//     </p>
//     </div>) : <p>no links yet</p>}

const mapStateToProps = (state) => {
  return {...state.users, ...state.challenges}
}

export default connect(mapStateToProps)(UsersIndexShow)