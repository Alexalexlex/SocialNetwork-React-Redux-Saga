export const SET_USER = 'SET_USER'
export const GET_USER_DATA = 'GET_USER_DATA'

export function setUser(user) {
    return {
      type: SET_USER,
      payload: user,
    }
  }