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
  return {
    type: 'ADD_FRIEND',
    friendship
  }
}

export const completeChallenge = (challenge) => {
  return {
    type: 'COMPLETE_CHALLENGE',
    challenge
  }
}

export const deleteFriend = (id) => {
  return {
    type: 'DELETE_FRIEND',
    id: parseInt(id, 10)
  }
}

export const deleteInProgressChallenge = (id) => {
  // debugger
  return{
    type: 'DELETE_IN_PROGRESS_CHALLENGE',
    favorite_id: parseInt(id, 10) 
  }
}
