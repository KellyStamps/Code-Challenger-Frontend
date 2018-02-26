export const fetchChallenges = (challenges) => {
  return {
    type: 'FETCH_CHALLENGES',
    challenges
  }
}

export const showChallenge = (challenge) => {
  console.log(challenge)
  return {
    type: 'SHOW_CHALLENGE',
    challenge
  }
}