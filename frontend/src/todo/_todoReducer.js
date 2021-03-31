import { CHANGE_DESCRIPTION, CLEAR_DESCRIPTION, SEARCH_TODO } from './_todoTypes';

const initialState = { description: '', list: [] }

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_DESCRIPTION:
      return { ...state, description: action.payload }
    case SEARCH_TODO:
      return { ...state, list: action.payload }
    case CLEAR_DESCRIPTION:
      return { ...state, description: '' }
    default:
      return state
  }    
}