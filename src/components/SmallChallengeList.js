import React from 'react'
import ChallengeCard from './ChallengeCard'
import {connect} from 'react-redux';

class SmallChallengeList extends React.Component {
  render(){
    return (
      <div className='small-challenge-list-div'>
      {this.props.challenges.slice(0,4).map(card => <ChallengeCard key={card.id} challenge={card}/>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {challenges: state.challenges.challenges}
}

export default connect(mapStateToProps)(SmallChallengeList);