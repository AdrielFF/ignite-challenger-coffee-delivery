import { Trash } from 'phosphor-react'
import { Button } from '../../../../../components/Button'
import { NumberInput } from '../../../../../components/NumberInput'

import { CartButtonsContainer } from './styles'
import { useContext, useState } from 'react'
import { CartItemType } from '../../../../../reducers/cartItems/reducer'
import { CartContext } from '../../../../../contexts/CartContext'

interface CartItemProps {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const [itemQuantity, setItemQuantity] = useState(item.quantity)
  const { updateCartItemQuantity, removeItemFromCart } = useContext(CartContext)

  function handleUpdateQuantity(newQuantity: number) {
    setItemQuantity(newQuantity)
    updateCartItemQuantity(item.id, newQuantity)
  }

  function handleRemoveCartItem() {
    removeItemFromCart(item.id)
  }

  const isDesktop = window.innerWidth >= 1024

  return (
    <li>
      <img src={item.imageUrl} alt="" />
      <div>
        <h4>{item.name}</h4>
        <CartButtonsContainer>
          <NumberInput
            inputValue={itemQuantity}
            updateInputValue={handleUpdateQuantity}
          />
          <Button handleClickEvent={handleRemoveCartItem}>
            <Trash />
            {isDesktop && `Remover`}
          </Button>
        </CartButtonsContainer>
      </div>
      <span>
        R$
        {(itemQuantity * item.price).toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
        })}
      </span>
    </li>
  )
}
