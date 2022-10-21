import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { CartContext } from '../../contexts/CartContext'
import * as S from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  const navigate = useNavigate()
  const { cartState } = useContext(CartContext)
  const { cart, orderReceivedSuccessfully } = cartState

  const amountProductTotal = cart.items ? cart.items.length : 0

  return (
    <S.HeaderContainer>
      <img
        src={logo}
        alt="Logo do Coffee Delivery"
        onClick={() => navigate('/')}
        style={{ cursor: 'pointer' }}
      />

      <S.Location>
        <span>
          <MapPin weight="fill" size={20} />
          Itabuna, BA
        </span>
        <button onClick={() => navigate('/checkout')}>
          <ShoppingCart weight="fill" size={20} />
          {!orderReceivedSuccessfully && (
            <S.AmountQuantity>{amountProductTotal}</S.AmountQuantity>
          )}
        </button>
      </S.Location>
    </S.HeaderContainer>
  )
}
