import React, { createContext, useEffect, useReducer } from 'react'

import {
  addAddressAction,
  addPaymentMethodAction,
  comfirmOrderAction,
  removeAddressAction,
  removePaymentMethodAction,
  resetConfirmOrderAction,
} from '../reducers/deliveryDataReducer/actions'
import {
  AddressFormFieldsType,
  AddressType,
  deliveryDataReducer,
  PaymentMethodType,
} from '../reducers/deliveryDataReducer/reducer'
import { FieldValues } from 'react-hook-form'
import { Bank, MapPin, Money } from 'phosphor-react'

interface DeliveryDataContextType {
  address: AddressType
  paymentMethods: PaymentMethodType[]
  isOrderConfirmed: boolean
  addressFormFields: AddressFormFieldsType
  addPaymentMethod: (paymentMethod: PaymentMethodType) => void
  removePaymentMethod: () => void
  addAddress: (address: AddressType) => void
  removeAddress: () => void
  confirmOrder: (orderAddress: FieldValues) => void
  resetConfirmOrder: () => void
}

export const DeliveryDataContext = createContext({} as DeliveryDataContextType)

interface DeliveryDataContextProviderProps {
  children: React.ReactNode
}

export function DeliveryDataContextProvider({
  children,
}: DeliveryDataContextProviderProps) {
  const [deliveryData, dispatch] = useReducer(
    deliveryDataReducer,
    {
      address: {},
      paymentMethods: [
        {
          id: 'credit',
          icon: MapPin,
          label: 'Cartão de crédito',
          isActive: false,
        },
        {
          id: 'debit',
          icon: Bank,
          label: 'Cartão de Débito',
          isActive: false,
        },
        {
          id: 'cash',
          icon: Money,
          label: 'Dinheiro',
          isActive: false,
        },
      ],
      addressFormFields: {},
      isOrderConfirmed: false,
    },
    (initialState) => {
      const storedStateAsJson = localStorage.getItem(
        '@ignite-coffee-delivery:address-state-1.0.0',
      )

      if (storedStateAsJson) {
        return {
          ...initialState,
          address: JSON.parse(storedStateAsJson),
        }
      }

      return initialState
    },
  )

  const { paymentMethods, address, addressFormFields, isOrderConfirmed } =
    deliveryData

  function addPaymentMethod(paymentMethod: PaymentMethodType) {
    dispatch(addPaymentMethodAction(paymentMethod))
  }

  function removePaymentMethod() {
    dispatch(removePaymentMethodAction())
  }

  function addAddress(address: AddressType) {
    dispatch(addAddressAction(address))
  }

  function removeAddress() {
    dispatch(removeAddressAction())
  }

  function confirmOrder(orderAddress: FieldValues) {
    dispatch(comfirmOrderAction(orderAddress))
  }

  function resetConfirmOrder() {
    dispatch(resetConfirmOrderAction())
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(address)

    localStorage.setItem(
      '@ignite-coffee-delivery:address-state-1.0.0',
      stateJSON,
    )
  }, [address])

  return (
    <DeliveryDataContext.Provider
      value={{
        address,
        paymentMethods,
        isOrderConfirmed,
        confirmOrder,
        addressFormFields,
        addPaymentMethod,
        removePaymentMethod,
        addAddress,
        removeAddress,
        resetConfirmOrder,
      }}
    >
      {children}
    </DeliveryDataContext.Provider>
  )
}
