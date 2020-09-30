export const SET_POST = 'SET_POST'

export function setPost(post) {
    return {
      type: SET_POST,
      payload: post,
    }
  }