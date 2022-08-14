import { ProductProps } from './reducer'

export enum ActionTypes {
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
  REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
  LOAD_PRODUCTS = 'LOAD_PRODUCTS',
}

export function addProductToCart(product: ProductProps) {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    payload: { product },
  }
}

export function removeProductFromCart(product: ProductProps) {
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
