import { combineReducers } from 'redux'
import { postsReducer } from './posts'
import { userReducer } from './authReducer'
import { commentsReducer } from './commentsReducer'
import { postInComment } from './postInComment'

export const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
  comments: commentsReducer,
  postin: postInComment,
})