import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { coffee } from './data'

export type ProductProps = typeof coffee[0]

type AddressFormData = {
  postalCode: string
  address: string
  addressNumber: string
  addressComplement: string
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

interface CartStateProps {
  products: ProductProps[]
  cart: CartProps
  checkout: CheckoutProps
}

interface CartContextType {
  cartState: CartStateProps
  setCartState: Dispatch<SetStateAction<CartStateProps>>
  addProduct: (product: ProductProps) => void
  removeProduct: (product: ProductProps) => void
  // clearCart: () => void
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, setCartState] = useState<CartStateProps>({
    products: [],
    cart: {
      items: [],
      totalCart: '0',
    },
    checkout: {
      address: {} as AddressFormData,
      paymentType: undefined,
    },
  })

  useEffect(() => {
    setCartState({
      products: coffee,
      cart: {
        items: [],
        totalCart: '0',
      },
      checkout: {
        address: {} as AddressFormData,
        paymentType: undefined,
      },
    })
  }, [])

  const removeProduct = useCallback(
    (product: ProductProps) => {
      const existsInTheCart = cartState.cart.items.find(
        (item) => item.productId === product.id,
      )

      if (!existsInTheCart) {
        return
      }

      if (existsInTheCart && existsInTheCart.amount > 1) {
        const decrement = cartState.cart.items.map((item) => {
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

        setCartState({
          ...cartState,
          cart: {
            items: decrement,
            totalCart: String(
              parseFloat(cartState.cart.totalCart) - parseFloat(product.price),
            ),
          },
          products: cartState.products.map((item) => {
            let updatedItem = item
            if (item.id === product.id) {
              updatedItem = {
                ...item,
                available: item.available + 1,
              }
            }
            return updatedItem
          }),
        })
      }

      if (existsInTheCart && existsInTheCart.amount === 1) {
        const remove = cartState.cart.items.filter(
          (item) => item.productId !== product.id,
        )

        setCartState({
          ...cartState,
          cart: {
            items: remove,
            totalCart: String(
              parseFloat(cartState.cart.totalCart) - parseFloat(product.price),
            ),
          },
          products: cartState.products.map((item) => {
            let updatedItem = item
            if (item.id === product.id) {
              updatedItem = {
                ...item,
                available: item.available + 1,
              }
            }
            return updatedItem
          }),
        })
      }
    },
    [cartState],
  )

  const addProduct = useCallback(
    (product: ProductProps) => {
      const isAvailable = product.available <= 0
      if (isAvailable) {
        return
      }

      const hasProductInCart = cartState.cart.items.find(
        (item) => item.productId === product.id,
      )

      if (hasProductInCart) {
        const incrementHasProduct = cartState.cart.items.map((item) => {
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

        setCartState({
          ...cartState,
          cart: {
            items: incrementHasProduct,
            totalCart: String(
              parseFloat(cartState.cart.totalCart) + parseFloat(product.price),
            ),
          },
          products: cartState.products.map((item) => {
            let updatedItem = item
            if (item.id === product.id) {
              updatedItem = {
                ...item,
                available: item.available - 1,
              }
            }
            return updatedItem
          }),
        })
      } else {
        setCartState({
          ...cartState,
          cart: {
            items: [
              ...cartState.cart.items,
              { productId: product.id, amount: 1, total: product.price },
            ],
            totalCart: String(
              parseFloat(cartState.cart.totalCart) + parseFloat(product.price),
            ),
          },
          products: cartState.products.map((item) => {
            let updatedItem = item
            if (item.id === product.id) {
              updatedItem = {
                ...item,
                available: item.available - 1,
              }
            }
            return updatedItem
          }),
        })
      }
    },
    [cartState],
  )

  return (
    <CartContext.Provider
      value={{
        cartState,
        setCartState,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
