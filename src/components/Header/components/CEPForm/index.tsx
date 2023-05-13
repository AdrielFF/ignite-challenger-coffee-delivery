import {
  CEPButtonContainer,
  CEPInputContainer,
  IconContainer,
  InvalidMessageContainer,
  LoaderContainer,
  RemoveCEPContainer,
} from './styles'

import { ChangeEvent, useContext, useEffect, useState } from 'react'

import { CircleNotch, MapPin, XCircle } from 'phosphor-react'

import { DeliveryDataContext } from '../../../../contexts/DeliveryDataContext'
import {
  valueWithOnlyNumber,
  cepValueFormatted,
} from '../../../../utils/helpers/cepInput'

const DEFAULT_CEP_VALUE_LENGTH = 8

export function CEPForm() {
  const { address, removeAddress, addAddress } = useContext(DeliveryDataContext)

  const [cepValue, setCepValue] = useState('')
  const [isSearchingCEP, setIsSearchingCEP] = useState(false)

  const isCEPSuccessfullyFilled = !!address.cep

  const isCEPInvalid =
    !isCEPSuccessfullyFilled &&
    valueWithOnlyNumber(cepValue).length === DEFAULT_CEP_VALUE_LENGTH

  function handleRemoveCEP() {
    removeAddress()
  }

  const isDesktop = window.innerWidth >= 1024

  const currentCityAndState = isDesktop
    ? `${address.localidade}, ${address.uf}`
    : `${address.uf}`

  const cepFieldSize = isCEPSuccessfullyFilled
    ? currentCityAndState.length - 1
    : 0

  function handleCEPInputChange(event: ChangeEvent<HTMLInputElement>) {
    setCepValue(event.target.value)

    if (
      valueWithOnlyNumber(event.target.value).length ===
      DEFAULT_CEP_VALUE_LENGTH
    ) {
      submitCEP(valueWithOnlyNumber(event.target.value))
    }
  }

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

  useEffect(() => {
    if (isCEPSuccessfullyFilled) {
      setCepValue('')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCEPSuccessfullyFilled])

  return (
    <CEPButtonContainer
      isCEPSuccessedFilled={isCEPSuccessfullyFilled}
      title="Preencha com seu seu CEP"
    >
      <CEPInputContainer>
        <CEPInputContainer>
          <label htmlFor="CEPField">Insira seu CEP</label>
          <input
            type="text"
            name="CEPField"
            maxLength={9}
            value={
              isCEPSuccessfullyFilled
                ? currentCityAndState
                : cepValueFormatted(cepValue)
            }
            onChange={handleCEPInputChange}
            readOnly={isCEPSuccessfullyFilled}
            size={cepFieldSize}
            autoComplete="off"
            placeholder="CEP"
          />

          {isCEPInvalid && !isSearchingCEP && (
            <InvalidMessageContainer>CEP inválido</InvalidMessageContainer>
          )}
          {isSearchingCEP && (
            <LoaderContainer>
              <CircleNotch size={22} />
            </LoaderContainer>
          )}

          {!isSearchingCEP && (
            <IconContainer>
              <MapPin size={22} weight="fill" />
            </IconContainer>
          )}
        </CEPInputContainer>
      </CEPInputContainer>

      {isCEPSuccessfullyFilled && (
        <RemoveCEPContainer title="Remover CEP atual" onClick={handleRemoveCEP}>
          <XCircle size={22} weight="duotone" />
        </RemoveCEPContainer>
      )}
    </CEPButtonContainer>
  )
}
