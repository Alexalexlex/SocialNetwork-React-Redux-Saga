export const SET_COMMENT = 'SET_COMMENT'
export const SET_MY_COMMENT = 'SET_MY_COMMENT'

export function setComment(comment) {
    return {
      type: SET_COMMENT,
      payload: comment,
    }
  }

export function setMyComment(comment) {
  return {
    type: SET_MY_COMMENT,
    payload: comment,
  }
}