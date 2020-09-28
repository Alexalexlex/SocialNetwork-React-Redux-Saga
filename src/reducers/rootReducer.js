export const initialState = {
    user: 'Admin',
    password: 'admin',
    id: Date.now()
  }
  
  export function rootReducer(state = initialState) {
    return state
  }