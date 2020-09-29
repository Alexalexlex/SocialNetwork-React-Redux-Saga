const initialState = {
    headline: 'Headline',
    description: `Truncation should be conditionally applicable on this long line of text
    as this is a much longer line than what the container can support. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
   Omnis explicabo maxime atque perferendis optio, laboriosam culpa odio ad consequatur neque odit laudantium,
   corporis nobis, sit aut assumenda doloribus cumque beatae.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
   Omnis explicabo maxime atque perferendis optio, laboriosam culpa odio ad consequatur neque odit laudantium, corporis nobis,
   sit aut assumenda doloribus cumque beatae.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis explicabo maxime atque perferendis optio, 
   laboriosam culpa odio ad consequatur neque odit laudantium, corporis nobis, sit aut assumenda doloribus cumque beatae.Lorem ipsum dolor sit, amet consectetur 
   adipisicing elit. Omnis explicabo maxime atque perferendis optio, laboriosam culpa odio ad consequatur neque odit laudantium, corporis nobis, 
   sit aut assumenda doloribus cumque beatae.`,
    comments: [],
  }
  
export function postsReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_POST':
          return { ...state, post: action.payload }
    
        default:
          return state
      }
  }