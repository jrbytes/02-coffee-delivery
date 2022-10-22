import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 74rem;
    width: 100%;
    margin: 0 auto;
    padding-bottom: ${theme.grid.gutterBottom};

    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: ${theme.spacings.medium};

    @media (max-width: ${theme.grid.container}) {
      padding: 0 ${theme.spacings.small} ${theme.grid.gutterBottom};
      grid-template-columns: 1fr;
    }
  `}
`
