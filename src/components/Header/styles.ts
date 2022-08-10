import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 74rem;
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacings.large} 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    gap: ${theme.spacings.small};

    span {
      background-color: ${theme.brand.purpleLight};
      padding: ${theme.spacings.small};
      border-radius: ${theme.borderRadius};

      display: flex;
      align-items: center;
      gap: ${theme.spacings.xsmall};
      color: ${theme.brand.purpleDark};
      font-size: ${theme.sizes.small};
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: ${theme.brand.yellowLight};
      color: ${theme.brand.yellowDark};
      padding: ${theme.spacings.small};
      border-radius: ${theme.borderRadius};
      border: 0;
      cursor: pointer;

      position: relative;
    }
  `}
`

export const AmountQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.1rem;
  height: 1.1rem;
  border-radius: 99px;
  position: absolute;
  top: -0.4rem;
  right: -0.4rem;

  ${({ theme }) => css`
    background-color: ${theme.brand.yellowDark};
    color: ${theme.base.white};
    font-size: ${theme.sizes.xsmall};
  `}
`
