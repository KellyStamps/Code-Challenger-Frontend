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