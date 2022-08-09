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
    background-color: ${(props) => props.theme.brand.yellowLight};
    color: ${({ theme }) => theme.brand.yellowDark};
    padding: 0.5rem;
    border-radius: 6px;
    border: 0;
    cursor: pointer;
  }
`
