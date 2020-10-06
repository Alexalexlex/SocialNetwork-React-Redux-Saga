export const SUCCESS_AUTH = 'SUCCESS_AUTH'

export function setData(data) {
    return {
      type: SUCCESS_AUTH,
      payload: data,
    }
  }