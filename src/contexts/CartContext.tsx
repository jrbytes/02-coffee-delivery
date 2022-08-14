import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useReducer,
} from 'react'
import {
  loadProducts,
  addProductToCart,
  removeProductFromCart,
} from '../reducers/cart/actions'
import { cartReducer, CartStateProps } from '../reducers/cart/reducer'

interface CartContextType {
  cartState: CartStateProps
  addProduct: (product: CartStateProps['products'][0]) => void
  removeProduct: (product: CartStateProps['products'][0]) => void
  // clearCart: () => void
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: {
      items: [],
      totalCart: '0',
    },
    checkout: {
      address: {} as CartStateProps['checkout']['address'],
      paymentType: undefined,
    },
  })

  useEffect(() => {
    dispatch(loadProducts())
  }, [])

  const addProduct = useCallback((product: CartStateProps['products'][0]) => {
    dispatch(addProductToCart(product))
  }, [])

  const removeProduct = useCallback(
    (product: CartStateProps['products'][0]) => {
      dispatch(removeProductFromCart(product))
    },
    [],
  )

  return (
    <CartContext.Provider
      value={{
        cartState,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
