export const SET_MY_COMMENT = 'SET_MY_COMMENT'
export const GET_COMMENTS = 'GET_COMMENTS'
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS'


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