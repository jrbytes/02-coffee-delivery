import { Header as HeaderStyled, Location } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderStyled>
      <img src={logo} alt="Logo do Coffee Delivery" />

      <Location>
        <span>
          <MapPin weight="fill" size={20} />
          Porto Alegre, RS
        </span>
        <button>
          <ShoppingCart weight="fill" size={20} />
        </button>
      </Location>
    </HeaderStyled>
  )
}
