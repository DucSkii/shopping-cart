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

export const getFavouritesListIds = (favouritesList) => {
  return favouritesList?.map(item => item.id) || []
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
    /*eslint no-case-declarations: "off"*/
    let newFavouritesList = [...state.favouritesList.filter(item => item.id !== action.item.id)]

    if(action.item.selectFavourite) {
      newFavouritesList = [
        ...state.favouritesList.filter(item => item.id !== action.item.id),
        action.item,
      ]
    }
    //update
    return {
      ...state,
      favouritesList: newFavouritesList,
    }
  case 'delete' :
    return {
      ...state,
      favouritesList: state.favouritesList.filter(favourites => favourites.id !== action.id),
    }
  case 'delete-cart' :
    return {
      ...state,
      cartList: state.cartList.filter(items => items.id !== action.id),
    }
  default:
    return state
  }
}