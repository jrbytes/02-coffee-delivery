import { useState } from 'react'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import * as S from './styles'

interface PaymentProps {
  method?: 'debit-card' | 'credit-card' | 'cash'
}

export function Payment() {
  const [selectedMethod, setSelectedMethod] = useState<PaymentProps['method']>()

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
      <S.Methods method={selectedMethod}>
        <button
          name="credit-card"
          onClick={() => setSelectedMethod('credit-card')}
        >
          <CreditCard size={16} /> Cartão de crédito
        </button>
        <button
          name="debit-card"
          onClick={() => setSelectedMethod('debit-card')}
        >
          <Bank size={16} /> Cartão de débito
        </button>
        <button name="cash" onClick={() => setSelectedMethod('cash')}>
          <Money size={16} /> Dinheiro
        </button>
      </S.Methods>
    </S.Payment>
  )
}
