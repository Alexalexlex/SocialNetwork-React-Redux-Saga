import { SET_MY_COMMENT, GET_COMMENTS, GET_COMMENTS_SUCCESS } from '../actions/commentsAction'

const initialState = []
  
export function commentsReducer(state = initialState, action) {
    switch (action.type) {

        case SET_MY_COMMENT:
          return [...state, {id: action.payload.id, user_id: action.payload.user_id, message: action.payload.message,} ]

          case GET_COMMENTS:
            return [...state]

          case GET_COMMENTS_SUCCESS:
            const reversePosts = [...action.comments]
            return reversePosts

        default:
          return state
      }
  }