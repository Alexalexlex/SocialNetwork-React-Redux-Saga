import { SET_POST_COMMENT } from '../actions/commentsAction'

const initialState = {}
  
export function postInComment(state = initialState, action) {
    switch (action.type) {
            case SET_POST_COMMENT:
              const newAction = action.post[0]
              return newAction

        default:
          return state
      }
  }