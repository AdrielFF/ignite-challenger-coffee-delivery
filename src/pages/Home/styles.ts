import styled from 'styled-components'

export const HomeContainer = styled.div`
  & h2 {
    font-size: 2rem;
    margin: 2rem 0;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeeListContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  @media (max-width: 1150px) {
    & h2 {
      text-align: center;
    }
  }
`
