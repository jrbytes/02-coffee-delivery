import { coffee } from '../../contexts/data'
import { ActionTypes } from './actions'

export type ProductProps = typeof coffee[0]

type AddressFormData = {
  postalCode: string
  address: string
  addressNumber: string
  addressComplement?: string
  neighborhood: string
  city: string
  state: string
}

interface PaymentProps {
  method?: 'debit-card' | 'credit-card' | 'cash'
}

type CheckoutProps = {
  address: AddressFormData
  paymentType: PaymentProps['method']
}

type CartProps = {
  items: {
    productId: number
    amount: number
    total: string
  }[]
  totalCart: string
}

export interface CartStateProps {
  products: ProductProps[]
  cart: CartProps
  checkout: CheckoutProps
  orderReceivedSuccessfully: boolean
}

export function cartReducer(state: CartStateProps, action: any) {
  switch (action.type) {
    case ActionTypes.ORDER_RECEIVED_SUCCESSFULLY: {
      return {
        ...state,
        orderReceivedSuccessfully: true,
      }
    }

    case ActionTypes.ADD_ADDRESS_AND_PAYMENT_TYPE: {
      if (state.orderReceivedSuccessfully) return { ...state }

      const { address, paymentType } = action.payload.checkout
      return {
        ...state,
        checkout: {
          address,
          paymentType,
        },
      }
    }
    case ActionTypes.LOAD_PRODUCTS: {
      return {
        ...state,
        products: coffee,
      }
    }
    case ActionTypes.ADD_PRODUCT_TO_CART: {
      if (state.orderReceivedSuccessfully) return { ...state }

      const { product } = action.payload

      const isAvailable = product.available <= 0
      if (isAvailable) {
        return {
          ...state,
        }
      }

      const hasProductInCart = state.cart.items.find(
        (item) => item.productId === product.id,
      )

      if (hasProductInCart) {
        const incrementHasProduct = state.cart.items.map((item) => {
          let newItem = item
          if (item.productId === product.id) {
            newItem = {
              ...item,
              amount: item.amount + 1,
              total: String(parseFloat(item.total) + parseFloat(product.price)),
            }
          }
          return newItem
        })

        return {
          ...state,
          cart: {
            items: incrementHasProduct,
            totalCart: String(
              parseFloat(state.cart.totalCart) + parseFloat(product.price),
            ),
          },
          products: state.products.map((item) => {
            let updatedItem = item
            if (item.id === product.id) {
              updatedItem = {
                ...item,
                available: item.available - 1,
              }
            }
            return updatedItem
          }),
        }
      } else {
        return {
          ...state,
          cart: {
            items: [
              ...state.cart.items,
              { productId: product.id, amount: 1, total: product.price },
            ],
            totalCart: String(
              parseFloat(state.cart.totalCart) + parseFloat(product.price),
            ),
          },
          products: state.products.map((item) => {
            let updatedItem = item
            if (item.id === product.id) {
              updatedItem = {
                ...item,
                available: item.available - 1,
              }
            }
            return updatedItem
          }),
        }
      }
    }
    case ActionTypes.REMOVE_PRODUCT_FROM_CART: {
      if (state.orderReceivedSuccessfully) return { ...state }

      const { product } = action.payload

      const existsInTheCart = state.cart.items.find(
        (item) => item.productId === product.id,
      )

      if (!existsInTheCart) {
        return { ...state }
      }

      if (existsInTheCart && existsInTheCart.amount > 1) {
        const decrement = state.cart.items.map((item) => {
          let updatedCart = { ...item }
          if (item.productId === product.id && item.amount > 1) {
            updatedCart = {
              ...item,
              amount: item.amount - 1,
              total: String(parseFloat(item.total) - parseFloat(product.price)),
            }
          }
          return updatedCart
        })

        return {
          ...state,
          cart: {
            items: decrement,
            totalCart: String(
              parseFloat(state.cart.totalCart) - parseFloat(product.price),
            ),
          },
          products: state.products.map((item) => {
            let updatedItem = item
            if (item.id === product.id) {
              updatedItem = {
                ...item,
                available: item.available + 1,
              }
            }
            return updatedItem
          }),
        }
      }

      if (existsInTheCart && existsInTheCart.amount === 1) {
        const remove = state.cart.items.filter(
          (item) => item.productId !== product.id,
        )

        return {
          ...state,
          cart: {
            items: remove,
            totalCart: String(
              parseFloat(state.cart.totalCart) - parseFloat(product.price),
            ),
          },
          products: state.products.map((item) => {
            let updatedItem = item
            if (item.id === product.id) {
              updatedItem = {
                ...item,
                available: item.available + 1,
              }
            }
            return updatedItem
          }),
        }
      }
    }
  }

  return state
}
