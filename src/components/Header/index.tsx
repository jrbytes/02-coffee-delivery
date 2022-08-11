import { MapPin, ShoppingCart } from 'phosphor-react'

import { AmountQuantity, HeaderContainer, Location } from './styles'
import logo from '../../assets/logo.svg'
import { CartContext } from '../../contexts/CartContext'
import { useContext } from 'react'

export function Header() {
  const { cart } = useContext(CartContext)

  const amountProductTotal = !cart ? '0' : cart.items.length

  return (
    <HeaderContainer>
      <img src={logo} alt="Logo do Coffee Delivery" />

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
