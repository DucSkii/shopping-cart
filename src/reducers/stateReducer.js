import { getWatches } from '../data/watches'
import { getNecklaces } from '../data/necklaces'
import { getEarrings } from '../data/earrings'

export const initialState = {
  cartList: [],
  favouritesList: [],
  watches: getWatches(),
  necklaces: getNecklaces(),
  earrings: getEarrings(),
}

export default function stateReducer(state, action) {
  switch(action.type) {
  case 'initial-load-cart' :
    return {
      ...state,
      cartList: action.payload || [],
    }
  case 'initial-load' :
    return {
      ...state,
      favouritesList: action.payload || [],
    }
  case 'add-cart' :
    return {
      ...state,
      cartList: [
        ...state.cartList,
        action.item,
      ],
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