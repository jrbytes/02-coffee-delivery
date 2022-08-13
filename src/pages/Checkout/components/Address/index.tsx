import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useCallback, useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CartContext } from '../../../../contexts/CartContext'
import * as S from './styles'
import * as theme from '../../../../styles/themes/default'

type AddressFormData = {
  postalCode: string
  address: string
  addressNumber: string
  addressComplement: string
  neighborhood: string
  city: string
  state: string
}

type PaymentProps = {
  method?: 'debit-card' | 'credit-card' | 'cash'
}

export function Address() {
  const { checkout, setCheckout } = useContext(CartContext)
  const [selectedMethod, setSelectedMethod] = useState<PaymentProps['method']>()

  const { register, handleSubmit, formState } = useForm<AddressFormData>({
    mode: 'onBlur',
  })
  const { errors } = formState

  const onSubmit = useCallback((data: AddressFormData) => {
    console.log(data)
  }, [])

  const border = (error: boolean) => {
    return error
      ? '1px solid red'
      : `1px solid ${theme.defaultTheme.base.button}`
  }

  const boxShadow = (error: boolean) => {
    return error ? '0px 0px 0px 2px tomato' : 'none'
  }

  return (
    <>
      <S.Address>
        <S.HeaderAddress>
          <MapPinLine size={22} />
          <div>
            <p>Endereço de Entrega</p>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </S.HeaderAddress>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.InputCep
            type="text"
            placeholder="CEP"
            style={{
              border: border(!!errors.postalCode),
              boxShadow: boxShadow(!!errors.postalCode),
            }}
            {...register('postalCode', {
              required: true,
            })}
          />{' '}
          <br />
          <S.InputRua
            type="text"
            placeholder="Rua"
            style={{
              border: border(!!errors.address),
              boxShadow: boxShadow(!!errors.address),
            }}
            {...register('address', {
              required: true,
            })}
          />{' '}
          <br />
          <S.InputNumero
            type="text"
            placeholder="Número"
            style={{
              border: border(!!errors.addressNumber),
              boxShadow: boxShadow(!!errors.addressNumber),
            }}
            {...register('addressNumber', {
              required: true,
            })}
          />
          <S.InputComplemento
            type="text"
            placeholder="Complemento"
            style={{
              border: border(!!errors.addressComplement),
              boxShadow: boxShadow(!!errors.addressComplement),
            }}
            {...register('addressComplement', {
              required: true,
            })}
          />{' '}
          <br />
          <S.InputBairro
            type="text"
            placeholder="Bairro"
            style={{
              border: border(!!errors.neighborhood),
              boxShadow: boxShadow(!!errors.neighborhood),
            }}
            {...register('neighborhood', {
              required: true,
            })}
          />
          <S.InputCidade
            type="text"
            placeholder="Cidade"
            style={{
              border: border(!!errors.city),
              boxShadow: boxShadow(!!errors.city),
            }}
            {...register('city', {
              required: true,
            })}
          />
          <S.InputUf
            type="text"
            placeholder="UF"
            style={{
              border: border(!!errors.state),
              boxShadow: boxShadow(!!errors.state),
            }}
            {...register('state', {
              required: true,
            })}
          />
        </form>
      </S.Address>
      <S.Payment>
        <S.HeaderPayment>
          <CurrencyDollar size={22} />
          <div>
            <p>Pagamento</p>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </S.HeaderPayment>
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
    </>
  )
}
