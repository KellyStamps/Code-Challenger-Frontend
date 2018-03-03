export const fetchUsers = allUsers => {
  return {
    type: 'FETCH_USERS',
    allUsers: allUsers
  }
}

export const addUser = user => {
  return {
    type: 'ADD_USER',
    user: user 
  }
}

export const updateUser = (user) => {
  return {
    type: 'UPDATE_USER',  
    user: user
  }
}

export const addFavorite = (challenge) => {
  return {
    type: 'ADD_FAVORITE',
    challenge: {challenge: {...challenge}, completed: false}
  }
}

export const addFriend = (friendship) => {
  debugger
  return {
    type: 'ADD_FRIEND',
    id: friendship.user_id
  }
}