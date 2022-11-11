import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    width: 100%;
    margin: 0 auto;
    padding: 0 ${theme.spacings.small};

    h2 {
      margin-bottom: 4rem;
    }

    @media (max-width: ${theme.grid.container}) {
      h2 {
        margin-top: 2rem;
        margin-bottom: 5.5rem;
      }
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;

    gap: ${theme.spacings.large};
    margin-bottom: ${theme.grid.gutterBottom};

    @media (max-width: ${theme.grid.container}) {
      justify-content: center;
    }

    @media (max-width: 768px) {
      gap: 5.5rem;
    }
  `}
`

export const Item = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin-top: -${theme.spacings.xlarge};
      filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.2));
    }

    width: 16.5rem;
    border-top-right-radius: ${theme.sizes.xlarge};
    border-bottom-left-radius: ${theme.sizes.xlarge};
    background-color: ${theme.base.card};
    padding: ${theme.spacings.small} ${theme.spacings.medium};

    @media (max-width: 768px) {
      width: 100%;

      img {
        margin-top: -4.5rem;
      }
    }
  `}
`

export const Tags = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xsmall};
    margin: ${theme.spacings.medium} 0;

    span {
      text-transform: uppercase;
      font-size: ${theme.sizes.xsmall};
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
      border-radius: 16px;
      background-color: ${theme.brand.yellowLight};
      color: ${theme.brand.yellowDark};
    }
  `}
`

export const Title = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.sizes.large};
    font-family: ${theme.font.title};
    font-weight: ${theme.font.titleWeight.boldOne};
    color: ${theme.base.subtitle};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.sizes.small};
    font-family: ${theme.font.text};
    font-weight: ${theme.font.textWeight.regular};
    color: ${theme.base.label};
    text-align: center;
    margin-top: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Price = styled.div`
  ${({ theme }) => css`
    span {
      :first-child {
        font-family: ${theme.font.text};
        font-size: 1rem;
      }

      :last-child {
        font-family: ${theme.font.title};
        font-weight: ${theme.font.titleWeight.boldTwo};
        font-size: 1.6rem;
      }
    }
  `}
`

type OrderReceivedSuccessfullyProps = {
  orderReceivedSuccessfully: boolean
}

export const Amount = styled.div<OrderReceivedSuccessfullyProps>`
  ${({ theme, orderReceivedSuccessfully }) => css`
    display: flex;
    align-items: center;
    background-color: ${theme.base.button};
    border-radius: ${theme.borderRadius};

    button {
      width: 2rem;
      height: 2rem;
      border: 0;
      color: ${orderReceivedSuccessfully
        ? theme.base.inative
        : theme.brand.purple};
      background-color: ${theme.base.button};
      cursor: pointer;

      :first-child {
        border-top-left-radius: ${theme.borderRadius};
        border-bottom-left-radius: ${theme.borderRadius};
      }

      :last-child {
        border-top-right-radius: ${theme.borderRadius};
        border-bottom-right-radius: ${theme.borderRadius};
      }
    }

    span {
      margin: 0 ${theme.spacings.xsmall};
      font-family: ${theme.font.text};
    }
  `}
`

export const ButtonCart = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;
    border: 0;
    color: ${theme.base.white};
    background-color: ${theme.brand.purpleDark};
    border-radius: ${theme.borderRadius};
    cursor: pointer;
  `}
`
