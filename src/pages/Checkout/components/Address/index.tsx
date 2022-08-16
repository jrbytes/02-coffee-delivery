import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useCallback, useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CartContext } from '../../../../contexts/CartContext'
import * as S from './styles'
import * as theme from '../../../../styles/themes/default'

type AddressFormData = {
  postalCode: string
  address: string
  addressNumber: string
  addressComplement?: string
  neighborhood: string
  city: string
  state: string
}

type PaymentProps = {
  method?: 'debit-card' | 'credit-card' | 'cash'
}

export function Address() {
  const { cartState, handleCheckout } = useContext(CartContext)
  const { orderReceivedSuccessfully } = cartState

  const [selectedMethod, setSelectedMethod] = useState<PaymentProps['method']>()

  const { register, watch, formState, setValue } = useForm<AddressFormData>({
    mode: 'onChange',
  })
  const { errors, isValid } = formState
  const formData = watch()

  useEffect(() => {
    if (cartState.checkout.address) {
      setValue('postalCode', cartState.checkout.address.postalCode)
      setValue('address', cartState.checkout.address.address)
      setValue('addressNumber', cartState.checkout.address.addressNumber)
      setValue(
        'addressComplement',
        cartState.checkout.address.addressComplement,
      )
      setValue('neighborhood', cartState.checkout.address.neighborhood)
      setValue('city', cartState.checkout.address.city)
      setValue('state', cartState.checkout.address.state)
      setSelectedMethod(cartState.checkout.paymentType)
    }
  }, [setValue, cartState.checkout, selectedMethod])

  const border = (error: boolean) => {
    return error
      ? '1px solid red'
      : `1px solid ${theme.defaultTheme.base.button}`
  }

  const boxShadow = (error: boolean) => {
    return error ? '0px 0px 0px 2px tomato' : 'none'
  }

  const handleAddCheckout = useCallback(
    (type: PaymentProps['method']) => {
      if (orderReceivedSuccessfully) {
        return
      }

      const errorsEmpty = Object.keys(errors).length === 0

      if (errorsEmpty) {
        setSelectedMethod(type)
        handleCheckout({
          address: formData,
          paymentType: type,
        })
      }
    },
    [errors, formData, handleCheckout, orderReceivedSuccessfully],
  )

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
        <form>
          <div>
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
              readOnly={orderReceivedSuccessfully}
            />
          </div>
          <br />
          <div>
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
              readOnly={orderReceivedSuccessfully}
            />
          </div>
          <br />
          <div
            style={{
              width: '100%',
              display: 'grid',
              gap: '1rem',
              gridTemplateColumns: '0.6fr 1.4fr',
            }}
          >
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
              readOnly={orderReceivedSuccessfully}
            />
            <S.InputComplementoGroup>
              <S.InputComplemento
                type="text"
                placeholder="Complemento"
                style={{
                  border: border(!!errors.addressComplement),
                  boxShadow: boxShadow(!!errors.addressComplement),
                }}
                {...register('addressComplement')}
                readOnly={orderReceivedSuccessfully}
              />
              {!formData.addressComplement && (
                <S.InputComplementoOptional>
                  Opcional
                </S.InputComplementoOptional>
              )}
            </S.InputComplementoGroup>
          </div>
          <br />
          <div
            style={{
              width: '100%',
              display: 'grid',
              gap: '1rem',
              gridTemplateColumns: '3fr 5fr 2fr',
            }}
          >
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
              readOnly={orderReceivedSuccessfully}
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
              readOnly={orderReceivedSuccessfully}
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
              readOnly={orderReceivedSuccessfully}
            />
          </div>
        </form>
      </S.Address>
      {(isValid || cartState.checkout.paymentType) && (
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
          <S.Methods
            method={selectedMethod}
            orderReceivedSuccessfully={orderReceivedSuccessfully}
          >
            <button
              name="credit-card"
              onClick={() => handleAddCheckout('credit-card')}
            >
              <CreditCard size={16} /> Cartão de crédito
            </button>
            <button
              name="debit-card"
              onClick={() => handleAddCheckout('debit-card')}
            >
              <Bank size={16} /> Cartão de débito
            </button>
            <button name="cash" onClick={() => handleAddCheckout('cash')}>
              <Money size={16} /> Dinheiro
            </button>
          </S.Methods>
        </S.Payment>
      )}
    </>
  )
}
