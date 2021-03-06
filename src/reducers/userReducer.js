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
        user: Object.assign({}, state.user, {favorites: state.user.favorites.concat({id: action.challenge.challenge.id, challenge: action.challenge.challenge.challenge, completed: false })})})
      return state;
      
    case 'ADD_FRIEND':
      let newFriend = state.allUsers.find(user => user.user.id === action.friendship.user_id) 
      state = Object.assign({}, state, {
        user: Object.assign({}, state.user, {
          friends: state.user.friends.concat({id: action.friendship.id, friend: newFriend.user}) })})
      return state;
      
    case 'COMPLETE_CHALLENGE':

      let found = state.user.favorites.find(fav => fav.challenge.id === action.challenge.challenge_id)
      found.completed = true
      found.git_link = action.challenge.git_link
      found.live_link = action.challenge.live_link 
      
      state = Object.assign({}, state, {
        user: Object.assign({}, state.user, {
          favorites: state.user.favorites.filter(fav => fav.id !== found.id).concat(found)})
      })
      return state;
      
    case 'DELETE_FRIEND':
      let oldFriend = state.user.friends.find(fr => fr.id === action.id)
      
      state = Object.assign({}, state, {
        user: Object.assign({}, state.user, {
          friends: state.user.friends.filter(fr => fr.id !== oldFriend.id)})})
      return state;
      
    case 'DELETE_IN_PROGRESS_CHALLENGE':
      state = Object.assign({}, state, {
        user: Object.assign({}, state.user, {
          favorites: state.user.favorites.filter(fav => fav.id !== action.favorite_id)})})
      return state;
      
    default: 
      return state;
  }
}