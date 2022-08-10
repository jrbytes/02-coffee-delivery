import styled, { css } from 'styled-components'

export const Container = styled.div`
  max-width: 74rem;
  width: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: ${({ theme }) => theme.spacings.medium};
`
