import styled from 'styled-components'

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

  gap: 0.8rem;

  span {
    background-color: ${(props) => props.theme.brand.purpleLight};
    padding: 0.6rem 0.8rem;
    border-radius: 6px;

    display: flex;
    align-items: center;
    gap: 0.2rem;
    color: ${({ theme }) => theme.brand.purpleDark};
    font-size: 0.8rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.theme.brand.yellowLight};
    color: ${({ theme }) => theme.brand.yellowDark};
    padding: 0.6rem;
    border-radius: 6px;
    border: 0;
    cursor: pointer;

    position: relative;
  }
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
  background-color: ${(props) => props.theme.brand.yellowDark};
  color: ${({ theme }) => theme.base.white};
  font-size: ${({ theme }) => theme.sizes.xsmall};
`
