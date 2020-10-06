import { combineReducers } from 'redux'
import { postsReducer } from './posts'
import { userReducer } from './authReducer'
import { commentsReducer } from './commentsReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
  comments: commentsReducer,
})