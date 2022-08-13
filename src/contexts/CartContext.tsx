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

interface CartContextType {
  products: ProductProps[]
  cart: CartProps | undefined
  checkout: CheckoutProps
  setCheckout: Dispatch<SetStateAction<CheckoutProps>>
  addProduct: (product: ProductProps) => void
  removeProduct: (product: ProductProps) => void
  // clearCart: () => void
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<ProductProps[]>([])
  const [cart, setCart] = useState<CartProps>({
    items: [],
    totalCart: '0',
  } as CartProps)
  const [checkout, setCheckout] = useState<CheckoutProps>({
    address: {} as AddressFormData,
    paymentType: undefined,
  })
  console.log(checkout)

  useEffect(() => {
    setProducts(coffee)
  }, [])

  const removeProduct = useCallback(
    (product: ProductProps) => {
      const existsInTheCart = cart.items.find(
        (item) => item.productId === product.id,
      )

      if (!existsInTheCart) {
        return
      }

      if (existsInTheCart && existsInTheCart.amount > 1) {
        const decrement = cart.items.map((item) => {
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

        setCart({
          items: decrement,
          totalCart: String(
            parseFloat(cart.totalCart) - parseFloat(product.price),
          ),
        })

        setProducts(
          products.map((item) => {
            let updatedItem = item
            if (item.id === product.id) {
              updatedItem = {
                ...item,
                available: item.available + 1,
              }
            }
            return updatedItem
          }),
        )
      }

      if (existsInTheCart && existsInTheCart.amount === 1) {
        const remove = cart.items.filter(
          (item) => item.productId !== product.id,
        )

        setCart({
          items: remove,
          totalCart: String(
            parseFloat(cart.totalCart) - parseFloat(product.price),
          ),
        })

        setProducts(
          products.map((item) => {
            let updatedItem = item
            if (item.id === product.id) {
              updatedItem = {
                ...item,
                available: item.available + 1,
              }
            }
            return updatedItem
          }),
        )
      }
    },
    [cart.items, cart.totalCart, products],
  )

  const addProduct = useCallback(
    (product: ProductProps) => {
      const isAvailable = product.available <= 0
      if (isAvailable) {
        return
      }

      const hasProductInCart = cart.items.find(
        (item) => item.productId === product.id,
      )

      if (hasProductInCart) {
        const incrementHasProduct = cart.items.map((item) => {
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

        setCart({
          items: incrementHasProduct,
          totalCart: String(
            parseFloat(cart.totalCart) + parseFloat(product.price),
          ),
        })
        setProducts(
          products.map((item) => {
            let updatedItem = item
            if (item.id === product.id) {
              updatedItem = {
                ...item,
                available: item.available - 1,
              }
            }
            return updatedItem
          }),
        )
      } else {
        setCart({
          items: [
            ...cart.items,
            { productId: product.id, amount: 1, total: product.price },
          ],
          totalCart: String(
            parseFloat(cart.totalCart) + parseFloat(product.price),
          ),
        })
        setProducts(
          products.map((item) => {
            let updatedItem = item
            if (item.id === product.id) {
              updatedItem = {
                ...item,
                available: item.available - 1,
              }
            }
            return updatedItem
          }),
        )
      }
    },
    [cart, products],
  )

  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        addProduct,
        removeProduct,
        checkout,
        setCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
