export const SET_MY_COMMENT = 'SET_MY_COMMENT'
export const GET_COMMENTS = 'GET_COMMENTS'
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS'
export const SET_POST_COMMENT = 'SET_POST_COMMENT'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'


export function setMyComment(comment) {
  return {
    type: SET_MY_COMMENT,
    payload: comment,
  }
}

export function getComments(id) {
  return {
    type: GET_COMMENTS,
    payload: id,
  }
}

export function deletePost(id) {
  return { 
    type: DELETE_POST,
    id: id,
  }
}

export function editPost(post) {
  return {
    type: EDIT_POST,
    post: post,
  }
}