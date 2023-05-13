import styled, { css } from 'styled-components'

export const CheckoutCartContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 2.5rem 0;

  display: grid;
  grid-template-columns: 40rem 1fr;
  gap: 2rem;

  & h2 {
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: 0.9375rem;
  }

  @media (max-width: 1150px) {
    grid-template-columns: 40rem;
    max-width: 40rem;
    margin: 0 auto;
  }

  @media (max-width: 575px) {
    grid-template-columns: 1fr;
    padding: 0 1rem 2.5rem 1rem;
  }

  @media (max-width: 575px) {
    grid-template-columns: 1fr;
  }
`

interface CardHeaderContainerProps {
  iconColor: 'yellow-dark' | 'purple'
}

export const CardHeaderContainer = styled.header<CardHeaderContainerProps>`
  display: flex;
  gap: 0.5rem;

  & svg {
    ${(props) => {
      if (props.iconColor === 'yellow-dark') {
        return css`
          color: ${(props) => props.theme['yellow-dark']};
        `
      } else if (props.iconColor === 'purple') {
        return css`
          color: ${(props) => props.theme.purple};
        `
      }
    }}
  }

  & div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    margin-bottom: 2rem;

    & h3 {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
      line-height: 1.3;
    }

    & p {
      font-size: 0.875;
      line-height: 1.3;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const AddressAndPaymentContainer = styled.div`
  & > div + div {
    margin-top: 1rem;
  }
`
