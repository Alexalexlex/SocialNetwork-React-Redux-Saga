import { combineReducers } from 'redux'
import { postsReducer } from './posts'
import { userReducer } from './authReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
})