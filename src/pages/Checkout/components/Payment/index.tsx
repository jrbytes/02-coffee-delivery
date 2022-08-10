import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import * as S from './styles'

export function Payment() {
  return (
    <S.Payment>
      <S.Header>
        <CurrencyDollar size={22} />
        <div>
          <p>Pagamento</p>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </S.Header>
      <S.Methods>
        <button>
          <CreditCard size={16} /> Cartão de crédito
        </button>
        <button>
          <Bank size={16} /> Cartão de débito
        </button>
        <button>
          <Money size={16} /> Dinheiro
        </button>
      </S.Methods>
    </S.Payment>
  )
}
