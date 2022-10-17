import { MapPin, ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

import { AmountQuantity, HeaderContainer, Location } from './styles'
import logo from '../../assets/logo.svg'
import { CartContext } from '../../contexts/CartContext'
import { useContext } from 'react'

export function Header() {
  const navigate = useNavigate()
  const { cartState } = useContext(CartContext)
  const { cart, orderReceivedSuccessfully } = cartState

  const amountProductTotal = cart.items ? cart.items.length : 0

  return (
    <HeaderContainer>
      <img
        src={logo}
        alt="Logo do Coffee Delivery"
        onClick={() => navigate('/')}
        style={{ cursor: 'pointer' }}
      />

      <Location>
        <span>
          <MapPin weight="fill" size={20} />
          Itabuna, BA
        </span>
        <button onClick={() => navigate('/checkout')}>
          <ShoppingCart weight="fill" size={20} />
          {!orderReceivedSuccessfully && (
            <AmountQuantity>{amountProductTotal}</AmountQuantity>
          )}
        </button>
      </Location>
    </HeaderContainer>
  )
}
