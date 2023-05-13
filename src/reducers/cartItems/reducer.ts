import { ActionsTypes } from './actions'

export interface CartItemType {
  id: number
  imageUrl: string
  name: string
  price: number
  quantity: number
}

export function cartItemReducer(state: CartItemType[], action: any) {
  switch (action.type) {
    case ActionsTypes.ADD_ITEM_TO_CART: {
      const alrearyHasItem = state.find(
        (item) => item.id === action.payload.newCartItem.id,
      )

      if (alrearyHasItem) {
        return [
          ...state.map((item) => {
            if (item.id === action.payload.newCartItem.id) {
              return {
                ...item,
                quantity: item.quantity + action.payload.newCartItem.quantity,
              }
            }
            return item
          }),
        ]
      }

      return [...state, action.payload.newCartItem]
    }
    case ActionsTypes.UPDATE_ITEM_QUANTITY:
      return [
        ...state.map((item) => {
          if (item.id === action.payload.cartItemId) {
            return {
              ...item,
              quantity: action.payload.newQuantity,
            }
          }
          return item
        }),
      ]
    case ActionsTypes.REMOVE_ITEM_FROM_CART:
      return [...state.filter((item) => item.id !== action.payload.cartItemId)]
    case ActionsTypes.CLEAR_CART:
      return []
    default:
      return state
  }
}
