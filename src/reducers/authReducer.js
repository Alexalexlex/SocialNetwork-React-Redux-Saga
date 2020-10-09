import { SET_USER, GET_USER_DATA } from '../actions/authAction'

const initialState = []
  
export function userReducer(state = initialState, action) {
    switch (action.type) {
        case  SET_USER:
          return [...state, {first_name: action.payload.firstName, last_name: action.payload.lastName, email: action.payload.email, password: action.payload.password }]
    
        case GET_USER_DATA:
        return { ...state, ...action.data.data }

        default:
          return state
      }
  }