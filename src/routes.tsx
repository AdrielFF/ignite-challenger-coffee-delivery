import { Route, Routes } from 'react-router'
import { DefaultLayout } from './Layouts/DefaultLayout'
import { Home } from './pages/Home'
import { CheckoutCart } from './pages/CheckoutCart'
import { ConfirmedOrder } from './pages/ConfirmedOrder'
import { useContext } from 'react'
import { DeliveryDataContext } from './contexts/DeliveryDataContext'

export function Router() {
  const { isOrderConfirmed } = useContext(DeliveryDataContext)

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout-cart" element={<CheckoutCart />} />
        {isOrderConfirmed && (
          <Route path="/confirmed-order" element={<ConfirmedOrder />} />
        )}
      </Route>
    </Routes>
  )
}
