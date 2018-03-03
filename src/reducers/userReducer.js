export default function userReducer(state = {user: null, allUsers: null}, action) {
  switch(action.type) {
    
    case 'FETCH_USERS':
      state = {...state, allUsers: action.allUsers}
      return state;
    
    case 'ADD_USER':
      state = {...state, user: action.user}
      return state;
      
    case 'UPDATE_USER': 
      state = {...state, user: action.user}
      return state;
      
    case 'ADD_FAVORITE':
      state = Object.assign({}, state, {
        user: Object.assign({}, state.user, {
          favorites: state.user.favorites.concat(action.challenge) })})
      return state;
      
    case 'ADD_FRIEND':
      let friend = state.allUsers.find(user => user.user.id === action.id) 
      state = Object.assign({}, state, {
        user: Object.assign({}, state.user, {
          friends: state.user.friends.concat(friend.user) })})
      return state;
      
    default: 
      return state;
  }
}