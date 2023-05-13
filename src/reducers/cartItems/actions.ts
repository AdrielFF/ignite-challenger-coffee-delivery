import { CartItemType } from './reducer'

export enum ActionsTypes {
  UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY',
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  CLEAR_CART = 'CLEAR_CART',
}

export function updateCartItemQuantityAction(
  cartItemId: number,
  newQuantity: number,
) {
  return {
    type: ActionsTypes.UPDATE_ITEM_QUANTITY,
    payload: {
      cartItemId,
      newQuantity,
    },
  }
}

export function addItemToCartAction(newCartItem: CartItemType) {
  return {
    type: ActionsTypes.ADD_ITEM_TO_CART,
    payload: {
      newCartItem,
    },
  }
}

export function removeItemFromCartAction(cartItemId: number) {
  return {
    type: ActionsTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      cartItemId,
    },
  }
}

export function clearCartAction() {
  return {
    type: ActionsTypes.CLEAR_CART,
    payload: {},
  }
}
