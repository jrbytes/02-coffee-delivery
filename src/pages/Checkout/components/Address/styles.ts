import styled, { css } from 'styled-components'

export const Address = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.base.card};
    border-radius: ${theme.borderRadius};
    padding: ${theme.spacings.xlarge};
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.base.subtitle};
    margin-bottom: ${theme.spacings.large};

    svg {
      margin-right: ${theme.spacings.small};
      color: ${theme.brand.yellowDark};
    }

    div {
      p {
        :first-child {
          font-size: ${theme.sizes.medium};
        }
        :last-child {
          font-size: ${theme.sizes.small};
        }
      }
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.base.input};
    border: 1px solid ${theme.base.button};
    border-radius: ${theme.borderRadius};

    padding: ${theme.spacings.small} ${theme.spacings.small};

    ::placeholder {
      color: ${theme.base.label};
    }
  `}
`

export const InputCep = styled(Input)`
  ${({ theme }) => css`
    width: 30%;
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const InputRua = styled(Input)`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const InputNumero = styled(Input)`
  ${({ theme }) => css`
    width: 30%;
    margin-right: 5%;
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const InputComplemento = styled(Input)`
  ${({ theme }) => css`
    width: 65%;
  `}
`

export const InputBairro = styled(Input)`
  ${({ theme }) => css`
    width: 30%;
    margin-right: 5%;
  `}
`

export const InputCidade = styled(Input)`
  ${({ theme }) => css`
    width: 50%;
    margin-right: 5%;
  `}
`

export const InputUf = styled(Input)`
  ${({ theme }) => css`
    width: 10%;
  `}
`
