import { getWatches } from '../data/watches'
import { getNecklaces } from '../data/necklaces'
import { getEarrings } from '../data/earrings'

export const initialState = {
  favouritesList: [],
  watches: getWatches(),
  necklaces: getNecklaces(),
  earrings: getEarrings(),
}

export default function stateReducer(state, action) {
  switch(action.type) {
  case 'initial-load' :
    return {
      ...state,
      favouritesList: action.payload || [],
    }
  case 'add' :
    return {
      ...state,
      favouritesList: [
        ...state.favouritesList,
        action.item,
      ],
    }
  case 'delete' :
    return {
      ...state,
      favouritesList: state.favouritesList.filter(favourites => favourites.id !== action.id),
    }
  default:
    return state
  }
}