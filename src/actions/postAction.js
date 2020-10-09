export const SET_MY_POST = 'SET_MY_POST'
export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'

  export function setMyPost(post) {
    return {
      type: SET_MY_POST,
      payload: post,
    }
  }

  export function getPosts() {
    return {
      type: GET_POSTS,
    }
  }
