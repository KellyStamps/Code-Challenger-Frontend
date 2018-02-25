export default function challengeReducer(state = {
  challenges: [],
}, action) {
  switch(action.type) {
    case 'FETCH_CHALLENGES':
      fetch('http://localhost:3000/challenges')
      .then(res => res.json())
      .then(json => state.challenges.concat(json))
      
      return state;
    
    case 'ADD_CHALLENGE':
      return state.challenges.concat(action.challenge);
    default: 
      return state;
  }
}