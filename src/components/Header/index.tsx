import { MapPin, ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

import { AmountQuantity, HeaderContainer, Location } from './styles'
import logo from '../../assets/logo.svg'
import { CartContext } from '../../contexts/CartContext'
import { useContext } from 'react'

export function Header() {
  const navigate = useNavigate()
  const { cartState } = useContext(CartContext)
  const cart = cartState.cart

  const amountProductTotal = !cart ? '0' : cart.items.length

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
          Porto Alegre, RS
        </span>
        <button>
          <ShoppingCart weight="fill" size={20} />
          <AmountQuantity>{amountProductTotal}</AmountQuantity>
        </button>
      </Location>
    </HeaderContainer>
  )
}
