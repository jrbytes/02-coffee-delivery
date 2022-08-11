import { createContext, ReactNode, useEffect, useState } from 'react'
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
  // addProduct: (product: ProductProps) => void
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
  const [cart, setCart] = useState<CartProps>()

  useEffect(() => {
    setProducts(coffee)
  }, [])

  return (
    <CartContext.Provider value={{ products, cart }}>
      {children}
    </CartContext.Provider>
  )
}
