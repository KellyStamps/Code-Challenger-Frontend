export default function challengeReducer(state = {
  challenges: [],
  showChallenge: null
}, action) {
  switch(action.type) {
    case 'FETCH_CHALLENGES':
      fetch('http://localhost:3000/challenges')
      .then(res => res.json())
      .then(json => state.challenges.concat(json))
      return state;
    
    case 'SHOW_CHALLENGE':
      state.showChallenge = action.challenge
      return state;
      
    case 'ADD_CHALLENGE':
      return state.challenges.concat(action.challenge);
    default: 
      return state;
  }
}