export const fetchChallenges = () => {
  return {
    type: 'FETCH_CHALLENGES',
  }
}

export const showChallenge = (challenge) => {
  return {
    type: 'SHOW_CHALLENGE',
    challenge
  }
}