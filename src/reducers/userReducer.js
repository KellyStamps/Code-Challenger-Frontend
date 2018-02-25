export default function userReducer(state = {
  user: [],
}, action) {
  switch(action.type) {

    // case 'ADD_USER':
    //   return Object.assign({}, state, { users: state.users.concat(action.user) });
    case 'ADD_USER':
      return state.user.concat(action.user);
    default: 
      return state;
  }
}