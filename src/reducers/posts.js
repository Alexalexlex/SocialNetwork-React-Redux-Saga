const initialState = {
    title: 'No Posts',
    description: ``,
    comments: [],
  }
  
export function postsReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_POST':
          return { ...state, title: action.payload.title, description: action.payload.description }
    
        default:
          return state
      }
  }