import {
  AddressFormContainer,
  CEPInputContainer,
  InvalidMessageContainer,
  LoaderContainer,
} from './styles'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { DeliveryDataContext } from '../../../../contexts/DeliveryDataContext'
import { CircleNotch } from 'phosphor-react'
import {
  cepValueFormatted,
  valueWithOnlyNumber,
} from '../../../../utils/helpers/cepInput'

const DEFAULT_CEP_VALUE_LENGTH = 8

interface AddressFormProps {
  register: UseFormRegister<FieldValues>
}

export function AddressForm({ register }: AddressFormProps) {
  const { address, removeAddress, addAddress } = useContext(DeliveryDataContext)

  const [cepValue, setCepValue] = useState('')
  const [isSearchingCEP, setIsSearchingCEP] = useState(false)

  const isCEPSuccessfullyFilled = !!address.cep

  const isCEPInvalid =
    !isCEPSuccessfullyFilled &&
    valueWithOnlyNumber(cepValue).length === DEFAULT_CEP_VALUE_LENGTH

  function handleCEPInputChange(event: ChangeEvent<HTMLInputElement>) {
    setCepValue(valueWithOnlyNumber(event.target.value))

    if (
      isCEPSuccessfullyFilled &&
      valueWithOnlyNumber(event.target.value).length < DEFAULT_CEP_VALUE_LENGTH
    ) {
      removeAddress()
    }

    if (
      valueWithOnlyNumber(event.target.value).length ===
        DEFAULT_CEP_VALUE_LENGTH &&
      !isCEPSuccessfullyFilled
    ) {
      submitCEP(event.target.value)
    }
  }

  useEffect(() => {
    if (address.cep) {
      setCepValue(address.cep)
    }

    if (!address.cep && cepValue.length !== DEFAULT_CEP_VALUE_LENGTH - 1) {
      setCepValue('')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address])

  function submitCEP(cep: string) {
    setIsSearchingCEP(true)
    fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then((response) => response.json())
      .then((response) => {
        setIsSearchingCEP(false)
        if (!response.erro) {
          const { bairro, localidade, logradouro, uf } = response

          addAddress({
            bairro,
            localidade,
            logradouro,
            uf,
            cep,
          })
        }
      })
  }

  return (
    <AddressFormContainer>
      <div id="cep-field">
        <CEPInputContainer>
          <CEPInputContainer>
            <label htmlFor="CEPField">Insira seu CEP</label>
            <input
              type="text"
              maxLength={9}
              value={cepValueFormatted(cepValue)}
              placeholder="CEP"
              {...register('CEPField', {
                onChange: handleCEPInputChange,
              })}
            />

            {isCEPInvalid && !isSearchingCEP && (
              <InvalidMessageContainer>CEP inválido</InvalidMessageContainer>
            )}
            {isSearchingCEP && (
              <LoaderContainer>
                <CircleNotch size={22} />
              </LoaderContainer>
            )}
          </CEPInputContainer>
        </CEPInputContainer>
      </div>
      <div id="street-field">
        <label htmlFor="streetField">Insira sua rua</label>
        <input
          type="text"
          placeholder="Rua"
          required
          {...register('streetField')}
        />
      </div>
      <div id="number-field">
        <label htmlFor="numberField">Insira o número do seu endereço</label>
        <input
          type="number"
          placeholder="Número"
          required
          {...register('numberField')}
        />
      </div>
      <div id="complement-field">
        <label htmlFor="complementField">Insira o complemento</label>
        <input
          type="text"
          placeholder="Complemento"
          {...register('complementField')}
        />
      </div>
      <div id="neighborhood-field">
        <label htmlFor="neighborhoodField">Insira o bairro</label>
        <input
          type="text"
          placeholder="Bairro"
          required
          {...register('neighborhoodField')}
        />
      </div>
      <div id="city-field">
        <label htmlFor="cityField">Insira a cidade</label>
        <input
          type="text"
          placeholder="Cidade"
          disabled
          required
          {...register('cityField')}
        />
      </div>
      <div id="state-field">
        <label htmlFor="stateField">Insira o estado</label>
        <input
          type="text"
          placeholder="UF"
          required
          disabled
          {...register('stateField')}
        />
      </div>
    </AddressFormContainer>
  )
}
