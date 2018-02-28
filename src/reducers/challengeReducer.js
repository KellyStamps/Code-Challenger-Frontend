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
      
    // case 'COMPLETE_CHALLENGE':
    //   debugger
    //   let found = state.challenges.find(chal => chal.id === action.challenge.challenge_id)
    //   found = action.challenge
    //   return state;
      
    default: 
      return state;
  }
}