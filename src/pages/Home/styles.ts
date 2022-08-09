import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-content: space-between;

  margin-top: 5rem;

  position: relative;
`

export const Content = styled.div`
  width: 50%;

  h4 {
    ${({ theme }) => `
      font-family: ${theme.font.title};
      font-weight: ${theme.font.titleWeight.boldTwo};
      color: ${theme.base.title};
      font-size: ${theme.sizes.xxlarge};
    `}
    line-height: 1.4;
  }

  p {
    ${({ theme }) => `
      margin-top: ${theme.sizes.small};
      font-size: ${theme.sizes.medium};
      `}
    line-height: 1.8;
  }
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

  ${({ theme }) => `
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
