import { useContext } from 'react'
import {
  CardContent,
  CardWrapper,
  ConfirmedOrderWrapper,
  MainContentWrapper,
} from './styles'
import { DeliveryDataContext } from '../../contexts/DeliveryDataContext'

import deliveringOrderImage from '../../assets/images/delivering-order-image.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function ConfirmedOrder() {
  const { addressFormFields, paymentMethods } = useContext(DeliveryDataContext)

  const { streetField, numberField, neighborhoodField, cityField, stateField } =
    addressFormFields

  const paymentMethodSelected = paymentMethods.find((item) => item.isActive)

  return (
    <ConfirmedOrderWrapper>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que o café chegará até você</p>
      <MainContentWrapper>
        <CardWrapper>
          <CardContent iconColor="purple">
            <span>
              <MapPin size={16} weight="fill" />
            </span>
            <div>
              Entrega em
              <strong>{` ${streetField}, ${numberField} ${neighborhoodField} - ${cityField}, 
                ${stateField}`}</strong>
            </div>
          </CardContent>
          <CardContent iconColor="yellow">
            <span>
              <Timer size={16} weight="fill" />
            </span>
            <div>
              Previsão de entrega <br />
              <strong>20 min - 30 min</strong>
            </div>
          </CardContent>
          <CardContent iconColor="yellow-dark">
            <span>
              <CurrencyDollar size={16} />
            </span>
            <div>
              Pagamento na entrega
              <br />
              <strong>
                {paymentMethodSelected ? paymentMethodSelected.label : ''}
              </strong>
            </div>
          </CardContent>
        </CardWrapper>
        <img
          src={deliveringOrderImage}
          alt="Entregador levando o produto com moto"
        />
      </MainContentWrapper>
    </ConfirmedOrderWrapper>
  )
}
