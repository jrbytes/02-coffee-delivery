import * as S from './styles'
import sendingOrder from '../../assets/sending-order.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'

export function Success() {
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
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong> <br />{' '}
              Farrapos - Porto Alegre, RS
            </p>
          </S.Item>
          <S.Item>
            <span style={{ backgroundColor: defaultTheme.brand.yellow }}>
              <Timer weight="fill" size={16} />
            </span>
            <p>
              Previsão de entrega <br /> <strong>20 min - 30 min</strong>
            </p>
          </S.Item>
          <S.Item>
            <span style={{ backgroundColor: defaultTheme.brand.yellowDark }}>
              <CurrencyDollar weight="fill" size={16} />
            </span>
            <p>
              Pagamento na entrega <br /> <strong>Cartão de Crédito</strong>
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
