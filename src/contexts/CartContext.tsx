import React, { createContext, useEffect, useReducer } from 'react'

import { cartItemReducer, CartItemType } from '../reducers/cartItems/reducer'

import {
  addItemToCartAction,
  clearCartAction,
  removeItemFromCartAction,
  updateCartItemQuantityAction,
} from '../reducers/cartItems/actions'

interface CartContextProviderProps {
  children: React.ReactNode
}

interface CartContextType {
  cartItems: CartItemType[]
  addNewItemToCart: (action: CartItemType) => void
  updateCartItemQuantity: (cartItemId: number, newQuantity: number) => void
  removeItemFromCart: (cartItemId: number) => void
  clearCart: () => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, dispatch] = useReducer(
    cartItemReducer,
    [],
    (initialState) => {
      const storedStateAsJson = localStorage.getItem(
        '@ignite-coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJson) {
        return JSON.parse(storedStateAsJson)
      }
      return initialState
    },
  )

  function addNewItemToCart(cartItem: CartItemType) {
    dispatch(addItemToCartAction(cartItem))
  }

  function updateCartItemQuantity(cartItemId: number, newQuantity: number) {
    dispatch(updateCartItemQuantityAction(cartItemId, newQuantity))
  }

  function removeItemFromCart(itemCartId: number) {
    dispatch(removeItemFromCartAction(itemCartId))
  }

  function clearCart() {
    dispatch(clearCartAction())
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartItems)

    localStorage.setItem('@ignite-coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addNewItemToCart,
        updateCartItemQuantity,
        removeItemFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
