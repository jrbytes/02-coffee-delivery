import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { coffee } from './data'

export type ProductProps = typeof coffee[0]

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
  // checkout: CheckoutProps
  addProduct: (product: ProductProps) => void
  // removeProduct: (product: ProductProps) => void
  // clearCart: () => void
  // addCheckout: (checkout: CheckoutProps) => void
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
  console.log('products', products)

  useEffect(() => {
    setProducts(coffee)
  }, [])

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
    <CartContext.Provider value={{ products, cart, addProduct }}>
      {children}
    </CartContext.Provider>
  )
}
