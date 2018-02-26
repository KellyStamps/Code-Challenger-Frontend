export default function userReducer(state = {user: null}, action) {
  switch(action.type) {
    case 'ADD_USER':
      state = {...state, user: action.user}
      return state;
    default: 
      return state;
  }
}