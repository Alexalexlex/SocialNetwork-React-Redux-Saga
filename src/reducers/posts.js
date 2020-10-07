import { SET_POST } from '../actions/postAction'
import { SET_MY_POST } from '../actions/postAction'

const initialState = []
  
export function postsReducer(state = initialState, action) {
    switch (action.type) {
        case  SET_POST:
          return [...state, action.payload ]

          case  SET_MY_POST:
            return [...state, {title: action.payload.title, description: action.payload.description, id: action.payload.id, user_id: action.payload.user_id,} ]

        default:
          return state
      }
  }