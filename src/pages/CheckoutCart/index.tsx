import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
  AddressAndPaymentContainer,
  CardHeaderContainer,
  CheckoutCartContainer,
} from './styles'
import { PaymentMethod } from './components/PaymentMethod/index'
import { AddressForm } from './components/AddressForm'
import { Cart } from './components/Cart'
import { Card } from '../../components/Card'
import { useForm } from 'react-hook-form'
import { useContext, useEffect } from 'react'
import { DeliveryDataContext } from '../../contexts/DeliveryDataContext'

export function CheckoutCart() {
  const { address, paymentMethods } = useContext(DeliveryDataContext)

  const form = useForm()

  const { register, handleSubmit, watch, setValue } = form

  const [streetField, numberField, , neighborhoodField, cityField, stateField] =
    watch([
      'streetField',
      'numberField',
      'complementField',
      'neighborhoodField',
      'cityField',
      'stateField',
    ])

  useEffect(() => {
    if (address) {
      setValue('CEPField', address.cep)
      setValue('streetField', address.logradouro)
      setValue('neighborhoodField', address.bairro)
      setValue('cityField', address.localidade)
      setValue('stateField', address.uf)
    }
  }, [address, setValue])

  const isSomePaymentMethodActive = paymentMethods.some(
    (paymentMethod) => paymentMethod.isActive,
  )

  const isButtonDisabled =
    !address.cep ||
    !streetField ||
    !numberField ||
    !neighborhoodField ||
    !cityField ||
    !stateField ||
    !isSomePaymentMethodActive

  return (
    <CheckoutCartContainer>
      <AddressAndPaymentContainer>
        <h2>Complete seu pedido</h2>
        <Card size="auto">
          <CardHeaderContainer iconColor="yellow-dark">
            <MapPinLine size={22} />
            <div>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </CardHeaderContainer>
          <AddressForm register={register} />
        </Card>

        <Card size="auto">
          <CardHeaderContainer iconColor="purple">
            <CurrencyDollar size={22} />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </CardHeaderContainer>
          <PaymentMethod />
        </Card>
      </AddressAndPaymentContainer>
      <div>
        <h2>Cafés selecionados</h2>
        <Cart handleSubmit={handleSubmit} isButtonDisabled={isButtonDisabled} />
      </div>
    </CheckoutCartContainer>
  )
}
