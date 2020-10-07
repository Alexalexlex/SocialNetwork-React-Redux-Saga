export const SET_POST = 'SET_POST'
export const SET_MY_POST = 'SET_MY_POST'

export function setPost(post) {
    return {
      type: SET_POST,
      payload: post,
    }
  }

  export function setMyPost(post) {
    return {
      type: SET_MY_POST,
      payload: post,
    }
  }