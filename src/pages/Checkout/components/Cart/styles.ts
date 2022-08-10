import styled, { css } from 'styled-components'

export const Cart = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.base.card};
    padding: ${theme.spacings.xlarge};
    border-top-right-radius: ${theme.sizes.xlarge};
    border-bottom-left-radius: ${theme.sizes.xlarge};
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
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    width: ${theme.sizes.xlarge};
    height: ${theme.sizes.xlarge};
    border: 0;
    color: ${theme.brand.purple};
    background-color: ${theme.base.button};
    font-size: ${theme.sizes.large};
    cursor: pointer;
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

export const ItemPrice = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.sizes.large};
    font-weight: ${theme.font.textWeight.bold};
    color: ${theme.base.text};
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

    button {
      width: 100%;
      margin-top: ${theme.spacings.small};
      padding: ${theme.spacings.small};
      background-color: ${theme.brand.yellow};
      color: ${theme.base.white};
      border: 0;
      border-radius: ${theme.borderRadius};
      text-transform: uppercase;
      font-size: ${theme.sizes.medium};
      font-weight: ${theme.font.textWeight.bold};
      cursor: pointer;
    }
  `}
`
