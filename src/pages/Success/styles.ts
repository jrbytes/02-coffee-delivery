import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    width: 100%;
    margin: 0 auto;
    padding-bottom: ${theme.grid.gutterBottom};

    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: ${theme.spacings.medium};
    align-items: flex-end;

    div {
      h2 {
        color: ${theme.brand.yellowDark};
      }

      p {
        color: ${theme.base.subtitle};
      }
    }

    @media (max-width: ${theme.grid.container}) {
      padding: ${theme.spacings.medium} ${theme.spacings.medium}
        ${theme.grid.gutterBottom};

      div {
        h2 {
          line-height: 1;
        }
      }
    }

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    background: linear-gradient(
          ${theme.base.background},
          ${theme.base.background}
        )
        padding-box,
      linear-gradient(to left, ${theme.brand.purple}, ${theme.brand.yellow})
        border-box;
    border-top-right-radius: ${theme.sizes.xxlarge};
    border-top-left-radius: ${theme.sizes.xsmall};
    border-bottom-left-radius: ${theme.sizes.xxlarge};
    border-bottom-right-radius: ${theme.sizes.xsmall};
    border: 1px solid transparent;
    padding: ${theme.spacings.xlarge};
    margin-top: ${theme.spacings.large};

    width: 80%;

    @media (max-width: 992px) {
      width: 100%;
    }
  `}
`

export const Item = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${theme.spacings.small};

    :not(:first-child) {
      margin-top: ${theme.spacings.large};
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 2.2rem;
      height: 2.2rem;
      color: ${theme.base.white};
      border-radius: ${theme.sizes.xxlarge};
    }

    p {
      font-size: ${theme.sizes.medium};
      color: ${theme.base.text};
    }

    @media (max-width: 992px) {
      flex-direction: column;
    }
  `}
`

export const Image = styled.div`
  ${({ theme }) => css`
    display: flex;

    img {
      width: 100%;
    }
  `}
`
