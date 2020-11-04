import { getWatches } from '../data/watches'
import { getNecklaces } from '../data/necklaces'
import { getEarrings } from '../data/earrings'
/*eslint no-case-declarations: "off"*/
export const initialState = {
  cartList: [],
  favouritesList: [],
  watches: getWatches(),
  necklaces: getNecklaces(),
  earrings: getEarrings(),
  itemCount: 0,
}

export const getFavouritesListIds = (favouritesList) => {
  return favouritesList?.map(item => item.id) || []
}

export const getCartListIds = (cartList) => {
  return cartList?.map(item => item.id) || []
}

export const getCartTotal = (cartList) => {
  const getSubTotal = cartList.reduce((amount, item) => ((item.cost * item.quantity) + amount), 0)

  const getDeliveryCost = cartList.reduce((amount, item) => {
    if(item.selectedDelivery === 'pro') {
      return 50 + amount
    }
    return amount
  }, 0)
  return getSubTotal + getDeliveryCost
}

// Can have function outside and use it within switches
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
  case 'CHANGE_QUANTITY' :
    const newQuantity = state.cartList.map(item => {
      if(item.id === action.item.id) {
        return {
          ...action.item,
          quantity: action.quantity,
        }
      }
      return item
    })
    return {
      ...state,
      cartList: newQuantity,
    }
  case 'CHANGE_SUBTOTAL' :
    const newSubTotal = state.cartList.map(item => {
      if(item.id === action.item.id) {
        return {
          ...action.item,
          subTotal: action.subTotal,
        }
      }
      return item
    })
    return {
      ...state,
      cartList: newSubTotal,
    }
  case 'DISPLAY_COUNT' :
    return {
      ...state,
      itemCount: action.count,
    }
  case 'add-cart' :
    // run getCartListIds and check if item already exists in cart
    // if it does then do the following
    // Map through cartList
    // if item.id from cartList === action.item.id
    // then you want to return the item and increase it's quantitiy
    // To do the above you should think in the same way you are spreading state, below.
    // (Basically editing an object)

    //OTHERWISE (add new item to cart)
    //do your current logic below for cartlist
    return {
      ...state,
      cartList: [
        ...state.cartList,
        action.item,
      ],
    }
  case 'add-cart-quantity' :
    // let newCart = [...state.cartList.filter(item => item.id !== action.item.id)]
    const newCart = state.cartList.map(item => {
      return item.id === action.item.id ? action.item : item
    })
    
    return {
      ...state,
      cartList: newCart,
    }
  case 'STANDARD_INCLUDES' :
    const newCartList = state.cartList.map(item => {
      if(item.id === action.item.id) {
        return {
          ...action.item,
          quantity: item.quantity,
        }
      }
      return item
    })
    return {
      ...state,
      cartList: newCartList,
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
      favouritesList: state.favouritesList.filter(favourites => favourites.id !== action.item.id),
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