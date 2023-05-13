import styled from 'styled-components'

export const CoffeeListContainer = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: 16rem 16rem 16rem 16rem;
  gap: 2rem;

  @media (max-width: 1150px) {
    grid-template-columns: 16rem 16rem 16rem;
    max-width: 52rem;
    margin: 0 auto 9.8125rem;
  }
  @media (max-width: 858px) {
    grid-template-columns: 16rem 16rem;
    max-width: 34rem;
    margin: 0 auto 9.8125rem;
  }

  @media (max-width: 580px) {
    grid-template-columns: 16rem;
    max-width: 16rem;
    margin: 0 auto 9.8125rem;
  }

  margin-bottom: 9.8125rem;

  & > div {
    height: 19.375rem;
    padding-top: 0;
    padding-bottom: 0;
  }
`

export const CoffeeContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 7.5rem;
  }

  margin-top: -1.25rem;

  & > div {
    text-align: center;

    & h3 {
      font-weight: 700;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
      line-height: 1.625rem;

      margin-bottom: 0.5rem;
    }

    & p {
      color: ${(props) => props.theme['base-label']};
      font-size: 0.875rem;
      line-height: 1.1375rem;
      margin-bottom: 2rem;
    }
  }
`

export const CofeeCategorieContainer = styled.span`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  border-radius: 999px;
  padding: 0.25rem 0.5rem;

  font-weight: 700;
  font-size: 0.625rem;
  text-transform: uppercase;

  margin: 0.75rem auto 1rem;
`

export const CategoriesContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`

export const CoffeeCardFooter = styled.div`
  display: flex;
  gap: 1.4375rem;
  height: 38px;

  & > span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;

    &::before {
      content: 'R$';
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      margin-right: 0.5rem;
      font-weight: 400;
    }
  }

  & > div {
    display: flex;
  }

  & button {
    border: 0;
    border-radius: 6px;
    line-height: 0;
  }
`
