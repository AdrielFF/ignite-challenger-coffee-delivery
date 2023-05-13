import {
  HeaderContainer,
  HeaderWrapper,
  HeaderSideInfoContainer,
  CartItemsQuantityContainer,
} from './styles'

import { ShoppingCart } from 'phosphor-react'

import coffeeDeliveryLogo from '../../assets/images/logo-coffee-delivery.svg'
import logoIcon from '../../assets/images/logo-icon.png'

import { SquircleIcon } from '../SquircleIcon'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { CEPForm } from './components/CEPForm'

export function Header() {
  const { cartItems } = useContext(CartContext)

  const cartItemsQuantity = cartItems.reduce(
    (accumulator, currentProduct) => accumulator + currentProduct.quantity,
    0,
  )

  const displayLogo = window.innerWidth >= 1024 ? coffeeDeliveryLogo : logoIcon

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <NavLink to="/">
          <img src={displayLogo} alt="" />
        </NavLink>
        <HeaderSideInfoContainer>
          <CEPForm />
          <NavLink to="/checkout-cart">
            <SquircleIcon background="yellow-light" color="yellow-dark">
              {cartItemsQuantity > 0 && (
                <CartItemsQuantityContainer>
                  {cartItemsQuantity}
                </CartItemsQuantityContainer>
              )}
              <ShoppingCart size={22} weight="fill" />
            </SquircleIcon>
          </NavLink>
        </HeaderSideInfoContainer>
      </HeaderContainer>
    </HeaderWrapper>
  )
}
