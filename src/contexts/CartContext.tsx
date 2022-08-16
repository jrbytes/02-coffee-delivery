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
  addAddressAndPaymentType,
  orderReceivedSuccessfully,
  removeItemTotalFromCart,
} from '../reducers/cart/actions'
import { cartReducer, CartStateProps } from '../reducers/cart/reducer'

interface CartContextType {
  cartState: CartStateProps
  addProduct: (product: CartStateProps['products'][0]) => void
  removeProduct: (product: CartStateProps['products'][0]) => void
  handleCheckout: (checkout: CartStateProps['checkout']) => void
  handleOrderReceived: () => void
  handleRemoveProductFromCart: (id: string) => void
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
    orderReceivedSuccessfully: false,
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

  const handleCheckout = useCallback((checkout: CartStateProps['checkout']) => {
    dispatch(addAddressAndPaymentType(checkout))
  }, [])

  const handleOrderReceived = useCallback(() => {
    dispatch(orderReceivedSuccessfully())
  }, [])

  const handleRemoveProductFromCart = useCallback((id: string) => {
    dispatch(removeItemTotalFromCart(id))
  }, [])

  return (
    <CartContext.Provider
      value={{
        cartState,
        addProduct,
        removeProduct,
        handleCheckout,
        handleOrderReceived,
        handleRemoveProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
