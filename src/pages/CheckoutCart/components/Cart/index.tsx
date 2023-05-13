import { useContext, useEffect } from 'react'

import { CartListContainer, EmptyCartContainer } from './styles'

import { CartItem } from './CartItem'
import { CartContext } from '../../../../contexts/CartContext'
import { Card } from '../../../../components/Card'
import { ShoppingCart } from 'phosphor-react'
import { FieldValues, UseFormHandleSubmit } from 'react-hook-form'

import { useNavigate } from 'react-router-dom'
import { DeliveryDataContext } from '../../../../contexts/DeliveryDataContext'
import { valueWithOnlyNumber } from '../../../../utils/helpers/cepInput'

interface CartProps {
  handleSubmit: UseFormHandleSubmit<FieldValues>
  isButtonDisabled: boolean
}

export function Cart({ isButtonDisabled, handleSubmit }: CartProps) {
  const { cartItems, clearCart } = useContext(CartContext)
  const {
    confirmOrder,
    isOrderConfirmed,
    removePaymentMethod,
    resetConfirmOrder,
  } = useContext(DeliveryDataContext)

  const navigate = useNavigate()

  const totalPriceItems = cartItems.reduce((currentPrice, item) => {
    return currentPrice + item.price * item.quantity
  }, 0)

  const freightPrice = 3.5

  const totalPrice = totalPriceItems + freightPrice

  function handleCheckoutSubmit(data: FieldValues) {
    confirmOrder({ ...data, CEPField: valueWithOnlyNumber(data.CEPField) })
    clearCart()
    navigate('/confirmed-order')
  }

  useEffect(() => {
    if (isOrderConfirmed) {
      removePaymentMethod()
      resetConfirmOrder()
    }
  }, [isOrderConfirmed, removePaymentMethod, resetConfirmOrder])

  return (
    <Card size="auto" variant="secondary">
      {cartItems.length > 0 ? (
        <CartListContainer>
          {cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />
          })}
          <table>
            <tbody>
              <tr>
                <th>Total de itens</th>
                <td>
                  R$
                  {` ${totalPriceItems.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                  })}`}
                </td>
              </tr>
              <tr>
                <th>Entrega</th>
                <td>
                  R$
                  {` ${freightPrice.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                  })}`}
                </td>
              </tr>
              <tr>
                <th>Total</th>
                <td>
                  R$
                  {` ${totalPrice.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                  })}`}
                </td>
              </tr>
            </tbody>
          </table>
          <button
            type="submit"
            disabled={isButtonDisabled}
            onClick={handleSubmit(handleCheckoutSubmit)}
          >
            Confirmar Pedido
          </button>
        </CartListContainer>
      ) : (
        <EmptyCartContainer>
          <ShoppingCart size={100} />
          <p>Seu carrinho está vazio :(</p>
        </EmptyCartContainer>
      )}
    </Card>
  )
}
