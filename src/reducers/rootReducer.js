import { combineReducers } from 'redux'
import { postsReducer } from './posts'
import { userReducer } from './users'

export const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
})