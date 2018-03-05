export const fetchChallenges = (challenges) => {
  return {
    type: 'FETCH_CHALLENGES',
    challenges
  }
}

export const showChallenge = (challenge) => {
  return {
    type: 'SHOW_CHALLENGE',
    challenge
  }
}

export const completeChallenge = (challenge) => {
  return {
    type: 'COMPLETE_CHALLENGE',
    challenge
  }
}

export const voteUpChallenge = (id) => {
  return {
    type: 'VOTE_UP_CHALLENGE',
    id
  }
}

export const voteDownChallenge = (id) => {
  return {
    type: 'VOTE_DOWN_CHALLENGE',
    id
  }
}

export const addChallenge = (challenge) => {
  return{
    type: 'ADD_CHALLENGE',
    challenge
  }
}

