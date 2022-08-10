import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.brand.purple};
  }

  body {
    ${({ theme }) => css`
      background-color: ${theme.base.background};
      color: ${theme.base.text};
    `}
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    ${({ theme }) => css`
      font-family: ${theme.font.text};
      font-weight: ${theme.font.textWeight.regular};
      font-size: 1rem;
    `}
  }

  h2 {
    ${({ theme }) => css`
      font-family: ${theme.font.title};
      font-size: ${theme.sizes.xlarge};
      font-weight: ${theme.font.titleWeight.boldTwo};
      color: ${theme.base.subtitle};
    `}
  }

  h3 {
    ${({ theme }) => css`
      font-family: ${theme.font.title};
      font-size: ${theme.sizes.large};
      font-weight: ${theme.font.titleWeight.boldTwo};
      color: ${theme.base.subtitle};
    `}
  }
`
