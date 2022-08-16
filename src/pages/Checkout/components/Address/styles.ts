import styled, { css } from 'styled-components'

export const Address = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.base.card};
    border-radius: ${theme.borderRadius};
    padding: ${theme.spacings.xlarge};
  `}
`

export const HeaderBase = styled.div`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.base.subtitle};
    margin-bottom: ${theme.spacings.large};

    svg {
      margin-right: ${theme.spacings.small};
      color: ${theme.brand.yellowDark};
    }

    div {
      p {
        :first-child {
          font-size: ${theme.sizes.medium};
        }
        :last-child {
          font-size: ${theme.sizes.small};
        }
      }
    }
  `}
`

export const HeaderAddress = styled(HeaderBase)`
  ${({ theme }) => css`
    svg {
      color: ${theme.brand.yellowDark};
    }
  `}
`

export const HeaderPayment = styled(HeaderBase)`
  ${({ theme }) => css`
    svg {
      color: ${theme.brand.purple};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.base.input};
    border-radius: ${theme.borderRadius};

    padding: ${theme.spacings.small} ${theme.spacings.small};

    ::placeholder {
      color: ${theme.base.label};
    }

    :read-only {
      background-color: ${theme.brand.yellowLight};
      color: ${theme.base.label};
    }
  `}
`

export const InputCep = styled(Input)`
  width: 30%;
`

export const InputRua = styled(Input)`
  width: 100%;
`

export const InputNumero = styled(Input)``

export const InputComplementoGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  position: relative;
`

export const InputComplemento = styled(Input)`
  width: 100%;
`

export const InputComplementoOptional = styled.em`
  ${({ theme }) => css`
    position: absolute;
    right: ${theme.spacings.medium};

    color: ${theme.base.label};
  `}
`

export const InputBairro = styled(Input)`
  width: 100%;
`

export const InputCidade = styled(Input)`
  width: 100%;
`

export const InputUf = styled(Input)`
  width: 100%;
`

export const Payment = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    background-color: ${theme.base.card};
    border-radius: ${theme.borderRadius};
    padding: ${theme.spacings.xlarge};
  `}
`

type PaymentMethodAndOrderReceivedProps = {
  method?: 'debit-card' | 'credit-card' | 'cash'
  orderReceivedSuccessfully: boolean
}

export const Methods = styled.div<PaymentMethodAndOrderReceivedProps>`
  ${({ theme, method, orderReceivedSuccessfully }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${theme.spacings.small};

    button {
      display: flex;
      align-items: center;

      gap: 0.4rem;
      background-color: ${theme.base.button};
      border: 1px solid ${theme.base.button};
      padding: ${theme.spacings.small} ${theme.spacings.small};
      border-radius: ${theme.borderRadius};
      text-transform: uppercase;
      font-size: ${theme.sizes.small};
      color: ${theme.base.text};
      cursor: ${orderReceivedSuccessfully ? 'not-allowed' : 'pointer'};

      box-shadow: none;

      svg {
        color: ${theme.brand.purple};
      }
    }

    button[name='${method}'] {
      background-color: ${orderReceivedSuccessfully
        ? theme.base.button
        : theme.brand.purpleLight};
      border: 1px solid ${theme.brand.purple};
    }
  `}
`
