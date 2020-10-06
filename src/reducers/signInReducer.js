import { SUCCESS_AUTH } from '../actions/signInAction'

const initialState = []
  
export function userReducer(state = initialState, action) {
    switch (action.type) {
        case  SUCCESS_AUTH:
          return [...state, {email: action.payload.email, password: action.payload.password }]
    
        default:
          return state
      }
  }