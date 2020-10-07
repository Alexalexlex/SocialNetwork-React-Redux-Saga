import { SET_COMMENT } from '../actions/commentsAction'
import { SET_MY_COMMENT } from '../actions/commentsAction'

const initialState = []
  
export function commentsReducer(state = initialState, action) {
    switch (action.type) {
        case  SET_COMMENT:
          return [...state, {id: action.payload.id, user_id: action.payload.user_id, message: action.payload.message,} ]
        case SET_MY_COMMENT:
          return [...state, {id: action.payload.id, user_id: action.payload.user_id, message: action.payload.message,} ]

        default:
          return state
      }
  }