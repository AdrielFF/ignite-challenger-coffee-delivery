import { FieldValues } from 'react-hook-form'
import { AddressType, PaymentMethodType } from './reducer'

export enum ActionsTypes {
  ADD_PAYMENT_METHOD = 'ADD_PAYMENT_METHOD',
  REMOVE_PAYMENT_METHOD = 'REMOVE_PAYMENT_METHOD',
  ADD_ADDRESS = 'ADD_ADDRESS',
  REMOVE_ADDRESS = 'REMOVE_ADDRESS',
  COMFIRM_ORDER = 'COMFIRM_ORDER',
  RESET_CONFIRM_ORDER = 'RESET_CONFIRM_ORDER',
}

export function addPaymentMethodAction(paymentMethod: PaymentMethodType) {
  return {
    type: ActionsTypes.ADD_PAYMENT_METHOD,
    payload: {
      paymentMethod,
    },
  }
}

export function addAddressAction(address: AddressType) {
  return {
    type: ActionsTypes.ADD_ADDRESS,
    payload: {
      address,
    },
  }
}

export function removeAddressAction() {
  return {
    type: ActionsTypes.REMOVE_ADDRESS,
    payload: {},
  }
}

export function removePaymentMethodAction() {
  return {
    type: ActionsTypes.REMOVE_PAYMENT_METHOD,
    payload: {},
  }
}

export function comfirmOrderAction(orderAddress: FieldValues) {
  return {
    type: ActionsTypes.COMFIRM_ORDER,
    payload: {
      orderAddress,
    },
  }
}

export function resetConfirmOrderAction() {
  return {
    type: ActionsTypes.RESET_CONFIRM_ORDER,
  }
}
