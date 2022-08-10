import styled, { css } from 'styled-components'

export const Payment = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    background-color: ${theme.base.card};
    border-radius: ${theme.borderRadius};
    padding: ${theme.spacings.xlarge};
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.base.subtitle};
    margin-bottom: ${theme.spacings.large};

    svg {
      margin-right: ${theme.spacings.small};
      color: ${theme.brand.purple};
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

type PaymentMethodProps = {
  method?: 'debit-card' | 'credit-card' | 'cash'
}

export const Methods = styled.div<PaymentMethodProps>`
  ${({ theme, method }) => css`
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
      cursor: pointer;

      box-shadow: none;

      svg {
        color: ${theme.brand.purple};
      }
    }

    button[name='${method}'] {
      background-color: ${theme.brand.purpleLight};
      border: 1px solid ${theme.brand.purple};
    }
  `}
`
