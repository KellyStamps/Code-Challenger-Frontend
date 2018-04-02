import {ROOT} from '../constants'

class AuthAdapter {
  
  static currentUser(){
    return fetch(`${ROOT}current_user`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt')
      }
    }).then(res => res.json())
  }
  
}

export default AuthAdapter