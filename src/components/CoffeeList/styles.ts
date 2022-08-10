import styled, { css } from 'styled-components'

export const Container = styled.div`
  max-width: 74rem;
  width: 100%;
  margin: 0 auto;

  h2 {
    margin-bottom: 4rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: ${({ theme }) => theme.spacings.xlarge};
  margin-bottom: 8rem;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => css`
    img {
      margin-top: -${theme.spacings.xlarge};
    }
    width: 16.5rem;
    border-top-right-radius: ${theme.sizes.xlarge};
    border-bottom-left-radius: ${theme.sizes.xlarge};
    background-color: ${theme.base.card};
    padding: ${theme.spacings.small} ${theme.spacings.medium};
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
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`

export const Price = styled.div`
  ${({ theme }) => css`
    span {
      :first-child {
        font-family: ${theme.font.text};
        margin-right: ${theme.spacings.xsmall};
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

export const Amount = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background-color: ${theme.base.button};
    border-radius: 8px;

    button {
      width: 2rem;
      height: 2rem;
      border: 0;
      color: ${theme.brand.purple};
      background-color: ${theme.base.button};
      cursor: pointer;

      :first-child {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }

      :last-child {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
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
    border-radius: 8px;
    cursor: pointer;
  `}
`
