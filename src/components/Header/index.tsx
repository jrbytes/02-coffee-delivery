import { MapPin, ShoppingCart } from 'phosphor-react'

import { AmountQuantity, HeaderContainer, Location } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
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
          <AmountQuantity>3</AmountQuantity>
        </button>
      </Location>
    </HeaderContainer>
  )
}
