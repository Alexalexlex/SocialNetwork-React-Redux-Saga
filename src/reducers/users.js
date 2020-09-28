const initialState = {
    user: 'Admin',
    password: 'admin',
    id: Math.round(Date.now()*Math.random())
  }
  
  export function userReducer(state = initialState) {
    return state
  }