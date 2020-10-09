import { SET_POST_COMMENT } from '../actions/commentsAction'

const initialState = {}
  
export function postInComment(state = initialState, action) {
    switch (action.type) {

            case SET_POST_COMMENT:
              return {...state, ...action.post}

        default:
          return state
      }
  }