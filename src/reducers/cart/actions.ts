import { CartStateProps } from './reducer'

export enum ActionTypes {
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
  REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
  LOAD_PRODUCTS = 'LOAD_PRODUCTS',
  ADD_ADDRESS_AND_PAYMENT_TYPE = 'ADD_ADDRESS_AND_PAYMENT_TYPE',
  ORDER_RECEIVED_SUCCESSFULLY = 'ORDER_RECEIVED_SUCCESSFULLY',
}

export function addProductToCart(product: CartStateProps['products'][0]) {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    payload: { product },
  }
}

export function removeProductFromCart(product: CartStateProps['products'][0]) {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: { product },
  }
}

export function loadProducts() {
  return {
    type: ActionTypes.LOAD_PRODUCTS,
  }
}

export function addAddressAndPaymentType(checkout: CartStateProps['checkout']) {
  return {
    type: ActionTypes.ADD_ADDRESS_AND_PAYMENT_TYPE,
    payload: { checkout },
  }
}

export function orderReceivedSuccessfully() {
  return {
    type: ActionTypes.ORDER_RECEIVED_SUCCESSFULLY,
  }
}
