import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  & button {
    width: 11.166875rem;
    height: 3.1875rem;
    justify-content: flex-start;
    padding: 0 1rem;
  }

  @media (max-width: 770px) {
    display: flex;
    flex-wrap: wrap;

    & button {
      width: 100%;
    }
  }
`
