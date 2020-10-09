import { SET_MY_POST, GET_POSTS, GET_POSTS_SUCCESS } from '../actions/postAction'


const initialState = []
  
export function postsReducer(state = initialState, action) {
    switch (action.type) {
          case  SET_MY_POST:
            return [...state, {title: action.payload.title, description: action.payload.description, id: action.payload.id, user_id: action.payload.user_id,} ]

          case GET_POSTS:
            return [...state]

          case GET_POSTS_SUCCESS:
            const reversePosts = [...state, ...action.json].reverse()
            return reversePosts

        default:
          return state
      }
  }