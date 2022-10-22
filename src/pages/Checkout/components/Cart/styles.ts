import styled, { css } from 'styled-components'

export const Cart = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.base.card};
    padding: ${theme.spacings.xlarge};
    border-top-right-radius: ${theme.sizes.xlarge};
    border-top-left-radius: ${theme.borderRadius};
    border-bottom-left-radius: ${theme.sizes.xlarge};
    border-bottom-right-radius: ${theme.borderRadius};

    @media (max-width: 768px) {
      padding: ${theme.spacings.medium};
    }
  `}
`

export const Item = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    padding-bottom: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.large};

    border-bottom: 1px solid ${theme.base.button};

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  `}
`

export const ItemInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.medium};

    img {
      width: 4rem;
    }

    div {
      p {
        font-size: ${theme.sizes.large};
        color: ${theme.base.subtitle};
        margin-bottom: ${theme.spacings.xsmall};
      }
    }

    @media (max-width: 768px) {
      width: 100%;
      div {
        width: 100%;
      }
    }
  `}
`

export const ItemButtons = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: ${theme.spacings.xsmall};

      background-color: ${theme.base.button};
      border-radius: ${theme.borderRadius};
    }

    @media (max-width: 768px) {
      div {
        display: flex;
        justify-content: space-between;
      }
    }
  `}
`

type OrderReceivedSuccessfullyProps = {
  orderReceivedSuccessfully: boolean
}

export const Button = styled.button<OrderReceivedSuccessfullyProps>`
  ${({ theme, orderReceivedSuccessfully }) => css`
    width: ${theme.sizes.xlarge};
    height: ${theme.sizes.xlarge};
    border: 0;
    background-color: ${theme.base.button};
    font-size: ${theme.sizes.large};

    color: ${orderReceivedSuccessfully
      ? theme.base.inative
      : theme.brand.purple};
    cursor: ${orderReceivedSuccessfully ? 'not-allowed' : 'pointer'};
  `}
`

export const MinusButton = styled(Button)`
  ${({ theme }) => css`
    :first-child {
      border-top-left-radius: ${theme.borderRadius};
      border-bottom-left-radius: ${theme.borderRadius};
    }
  `}
`

export const MoreButton = styled(Button)`
  ${({ theme }) => css`
    :last-child {
      border-top-right-radius: ${theme.borderRadius};
      border-bottom-right-radius: ${theme.borderRadius};
    }
  `}
`

export const RemoveButton = styled.button`
  ${({ theme }) => css`
    height: ${theme.sizes.xlarge};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xsmall};
    padding: ${theme.spacings.small};

    border: 0;
    border-radius: ${theme.borderRadius};
    color: ${theme.base.text};
    background-color: ${theme.base.button};
    font-size: ${theme.sizes.small};
    text-transform: uppercase;
    cursor: pointer;

    svg {
      color: ${theme.brand.purple};
    }
  `}
`

type ConfirmOrderProps = {
  isPermittedToConfirmOrder: boolean
}

export const ConfirmOrderButton = styled.button<ConfirmOrderProps>`
  ${({ theme, isPermittedToConfirmOrder }) => css`
    width: 100%;
    margin-top: ${theme.spacings.small};
    padding: ${theme.spacings.small};
    background-color: ${isPermittedToConfirmOrder
      ? theme.base.inative
      : theme.brand.yellow};
    color: ${theme.base.white};
    border: 0;
    border-radius: ${theme.borderRadius};
    text-transform: uppercase;
    font-size: ${theme.sizes.medium};
    font-weight: ${theme.font.textWeight.bold};
    cursor: ${isPermittedToConfirmOrder ? 'not-allowed' : 'pointer'};
  `}
`

export const ItemPrice = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.sizes.large};
    font-weight: ${theme.font.textWeight.bold};
    color: ${theme.base.text};

    @media (max-width: 768px) {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: ${theme.spacings.small};
      background-color: ${theme.base.button};
      border: 1px solid ${theme.base.hover};
      border-radius: ${theme.borderRadius};
      padding: ${theme.spacings.xsmall};
    }
  `}
`

export const AccountStatement = styled.div`
  ${({ theme }) => css`
    gap: ${theme.spacings.medium};

    div {
      p {
        display: flex;
        justify-content: space-between;
        margin-bottom: ${theme.spacings.small};

        font-size: ${theme.sizes.medium};
        color: ${theme.base.text};

        :last-child {
          font-size: ${theme.sizes.large};
          font-weight: ${theme.font.textWeight.bold};
        }
      }
    }
  `}
`

export const EmptyCart = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacings.small};
    padding: ${theme.spacings.xxlarge};
    color: ${theme.base.text};
    font-size: ${theme.sizes.medium};

    a {
      color: ${theme.brand.purple};
      text-decoration: none;
      font-size: ${theme.sizes.small};
      text-transform: uppercase;
    }
  `}
`
