import styled, { css } from 'styled-components'
import background from '../../assets/background.png'

export const Container = styled.div`
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  height: 544px;
`

export const Wrapper = styled.div`
  max-width: 74rem;
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-content: space-between;

  padding-top: 5rem;

  position: relative;
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 50%;

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
  `}
`

export const Image = styled.img`
  position: absolute;
  right: 0;
`

export const Tips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  padding-top: ${({ theme }) => theme.spacings.xlarge};
`

export const ItemBase = styled.div`
  display: flex;
  align-items: center;
  width: 45%;

  ${({ theme }) => css`
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
