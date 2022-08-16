import * as S from './styles'
import sendingOrder from '../../assets/sending-order.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'
import { CartContext } from '../../contexts/CartContext'
import { useContext } from 'react'

type PaymentProps = {
  method?: 'debit-card' | 'credit-card' | 'cash'
}

export function Success() {
  const { cartState } = useContext(CartContext)
  const { checkout } = cartState

  const parsePaymentType = (paymentType: PaymentProps['method']) => {
    switch (paymentType) {
      case 'debit-card':
        return 'Cartão de débito'
      case 'credit-card':
        return 'Cartão de crédito'
      case 'cash':
        return 'Dinheiro'
      default:
        return 'Não definido'
    }
  }

  return (
    <S.Container>
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <S.Content>
          <S.Item>
            <span style={{ backgroundColor: defaultTheme.brand.purple }}>
              <MapPin weight="fill" size={16} />
            </span>
            <p>
              Entrega em{' '}
              <strong>
                {checkout.address.address}, {checkout.address.addressNumber}
              </strong>{' '}
              <br /> {checkout.address.neighborhood} - {checkout.address.city},{' '}
              {checkout.address.state}
            </p>
          </S.Item>
          <S.Item>
            <span style={{ backgroundColor: defaultTheme.brand.yellow }}>
              <Timer weight="fill" size={16} />
            </span>
            <p>
              Previsão de entrega <br /> <strong>10 min - 15 min</strong>
            </p>
          </S.Item>
          <S.Item>
            <span style={{ backgroundColor: defaultTheme.brand.yellowDark }}>
              <CurrencyDollar weight="fill" size={16} />
            </span>
            <p>
              Pagamento na entrega <br />{' '}
              <strong>{parsePaymentType(checkout.paymentType)}</strong>
            </p>
          </S.Item>
        </S.Content>
      </div>
      <div>
        <img src={sendingOrder} alt="Desenho de homem levando o pedido" />
      </div>
    </S.Container>
  )
}
