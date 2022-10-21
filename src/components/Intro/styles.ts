import styled, { css } from 'styled-components'
import background from '../../assets/background.png'

export const Container = styled.div`
  ${({ theme }) => css`
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    height: 544px;

    @media (max-width: ${theme.grid.container}) {
      height: auto;
    }
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    width: 100%;
    margin: 0 auto;

    display: flex;

    margin-top: 5rem;

    @media (max-width: ${theme.grid.container}) {
      margin-top: ${theme.spacings.medium};
      padding: ${theme.spacings.small};

      flex-direction: column;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    h4 {
      font-family: ${theme.font.title};
      font-weight: ${theme.font.titleWeight.boldTwo};
      color: ${theme.base.title};
      font-size: ${theme.sizes.xxlarge};
      line-height: 1.4;
    }

    p {
      margin-top: ${theme.sizes.small};
      font-size: ${theme.sizes.medium};

      line-height: 1.8;
    }

    @media (max-width: ${theme.grid.container}) {
      h4 {
        font-size: ${theme.sizes.xlarge};
        line-height: 1;
      }

      p {
        font-size: ${theme.sizes.small};
        line-height: 1;
      }
    }
  `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    @media (max-width: ${theme.grid.container}) {
      max-width: 476px;
      max-height: 360px;
    }
  `}
`

export const Tips = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    padding-top: ${({ theme }) => theme.spacings.xlarge};

    @media (max-width: ${theme.grid.container}) {
      padding-top: ${({ theme }) => theme.spacings.medium};
      gap: 0.5rem;
    }
  `}
`

export const ItemBase = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 45%;

    gap: ${theme.spacings.xsmall};
    color: ${theme.base.text};
    font-size: ${theme.sizes.small};

    svg {
      color: ${theme.base.white};
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 1.8rem;
      height: 1.8rem;
      border-radius: 50%;
      padding: ${theme.spacings.xsmall};
    }

    @media (max-width: ${theme.grid.container}) {
      padding-left: ${theme.spacings.xsmall};
      width: 100%;
    }
  `}
`

export const Item1 = styled(ItemBase)`
  span {
    background-color: ${({ theme }) => theme.brand.yellowDark};
  }
`

export const Item2 = styled(ItemBase)`
  span {
    background-color: ${({ theme }) => theme.brand.yellow};
  }
`

export const Item3 = styled(ItemBase)`
  span {
    background-color: ${({ theme }) => theme.base.text};
  }
`

export const Item4 = styled(ItemBase)`
  span {
    background-color: ${({ theme }) => theme.brand.purple};
  }
`
