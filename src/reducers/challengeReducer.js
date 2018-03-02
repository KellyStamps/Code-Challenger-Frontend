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
      
    case 'VOTE_UP_CHALLENGE': 
      let updating = state.challenges.find(chall => chall.id === action.id)
      updating.rating = parseInt(updating.rating)
      updating.rating = updating.rating += 1
      return { 
          ...state,
          challenges: [...state.challenges[0,action.id], state.challenges.concat(updating), state.challenges[action.id+1]]
      }
      return state;
      
    case 'VOTE_DOWN_CHALLENGE': 
      let updated = state.challenges.find(chall => chall.id === action.id)
      updated.rating = parseInt(updated.rating)
      updated.rating = updated.rating -= 1
      return { 
          ...state,
          challenges: [...state.challenges[0,action.id], state.challenges.concat(updated), state.challenges[action.id+1]]
      }
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