import { Button } from '../../../../components/Button'
import { PaymentMethodContainer } from './styles'
import { useContext } from 'react'

import { DeliveryDataContext } from '../../../../contexts/DeliveryDataContext'
import { PaymentMethodType } from '../../../../reducers/deliveryDataReducer/reducer'

export function PaymentMethod() {
  const { paymentMethods, addPaymentMethod, removePaymentMethod } =
    useContext(DeliveryDataContext)

  // const isButtonSelected = (buttonPaymentMethod: PaymentMethodType) =>
  //   paymentMethod === buttonPaymentMethod

  const currentPaymentMethodActive = paymentMethods.find(
    (item) => item.isActive,
  )

  function handleUpdatePaymantMethod(buttonPaymentMethod: PaymentMethodType) {
    if (
      currentPaymentMethodActive &&
      currentPaymentMethodActive.id === buttonPaymentMethod.id
    ) {
      removePaymentMethod()
    } else {
      addPaymentMethod(buttonPaymentMethod)
    }
  }

  return (
    <PaymentMethodContainer>
      {paymentMethods.map((paymentMethod) => {
        const Icon = paymentMethod.icon
        return (
          <Button
            key={paymentMethod.id}
            selected={paymentMethod.isActive}
            handleClickEvent={() => handleUpdatePaymantMethod(paymentMethod)}
          >
            <Icon size={16} />
            {paymentMethod.label}
          </Button>
        )
      })}
    </PaymentMethodContainer>
  )
}
