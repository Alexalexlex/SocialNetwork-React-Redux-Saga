// const initialState = {
//     user: 'Admin',
//     password: 'admin',
//     id: Math.round(Date.now()*Math.random())
//   }
 
import { SET_USER } from '../actions/authAction'

const initialState = []
  
export function userReducer(state = initialState, action) {
    switch (action.type) {
        case  SET_USER:
          return [...state, {id: Math.round(Date.now()*Math.random()), name: action.payload.firstName, surname: action.payload.lastName, email: action.payload.email, }]
    
        default:
          return state
      }
  }