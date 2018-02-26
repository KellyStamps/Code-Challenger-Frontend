export default function challengeReducer(state = {
  challenges: [],
  showChallenge: null
}, action) {

  switch(action.type) {
    case 'FETCH_CHALLENGES':
      state = {...state, challenges: action.challenges}
      return state;
    
    case 'SHOW_CHALLENGE':
      state = {...state, showChallenge: action.challenge}
      return state;
      
    case 'ADD_CHALLENGE':
      return state.challenges.concat(action.challenge);
    default: 
      return state;
  }
}