import React from 'react'
import { ActionsTypes } from './actions'
import { IconProps } from 'phosphor-react'

export interface PaymentMethodType {
  id: string
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
  label: string
  isActive: boolean
}

export interface AddressType {
  bairro?: string
  localidade?: string
  logradouro?: string
  uf?: string
  cep?: string
}

export interface AddressFormFieldsType {
  CEPField: string
  streetField: string
  numberField: number
  complementField: string
  neighborhoodField: string
  cityField: string
  stateField: string
}

interface DeliveryDataState {
  address: AddressType
  paymentMethods: PaymentMethodType[]
  addressFormFields: AddressFormFieldsType
  isOrderConfirmed: boolean
}

export function deliveryDataReducer(state: DeliveryDataState, action: any) {
  switch (action.type) {
    case ActionsTypes.ADD_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethods: [
          ...state.paymentMethods.map((paymentMethod) => {
            if (paymentMethod.id === action.payload.paymentMethod.id) {
              return {
                ...paymentMethod,
                isActive: true,
              }
            } else {
              return {
                ...paymentMethod,
                isActive: false,
              }
            }
          }),
        ],
      }
    case ActionsTypes.REMOVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethods: [
          ...state.paymentMethods.map((paymentMethod) => {
            return {
              ...paymentMethod,
              isActive: false,
            }
          }),
        ],
      }
    case ActionsTypes.ADD_ADDRESS:
      return {
        ...state,
        address: {
          ...state.address,
          cep: action.payload.address.cep,
          bairro: action.payload.address.bairro,
          localidade: action.payload.address.localidade,
          logradouro: action.payload.address.logradouro,
          uf: action.payload.address.uf,
        },
      }
    case ActionsTypes.REMOVE_ADDRESS:
      return {
        ...state,
        address: {},
      }
    case ActionsTypes.COMFIRM_ORDER:
      return {
        ...state,
        addressFormFields: action.payload.orderAddress,
        isOrderConfirmed: true,
      }
    case ActionsTypes.RESET_CONFIRM_ORDER:
      return {
        ...state,
        isOrderConfirmed: false,
      }
    default:
      return state
  }
}
