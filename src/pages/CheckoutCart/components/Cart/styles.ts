import styled from 'styled-components'

export const CartListContainer = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;

  & li {
    display: flex;
    gap: 1.25rem;

    padding: 1.5rem 0;
    border-bottom: 1px solid ${(props) => props.theme['base-button']};

    &:first-of-type {
      padding-top: 0;
    }

    & > img {
      width: 4rem;
    }

    & h4 {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.3;

      color: ${(props) => props.theme['base-subtitle']};

      margin-bottom: 0.5rem;
    }

    & span {
      flex-grow: 1;
      text-align: right;
      font-weight: 700;
      font-size: 1rem;
    }
  }

  & table {
    margin: 1.5rem 0;
    border-spacing: 0 0.75rem;

    th {
      text-align: left;
    }

    tr:not(:last-of-type) th {
      font-weight: 400;
      font-size: 0.875rem;
    }

    tr:last-of-type th,
    tr:last-of-type td {
      font-weight: 700;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    td {
      text-align: right;
    }
  }

  & button[type='submit'] {
    padding: 0.75rem 0;

    border: 0;
    border-radius: 6px;

    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.6;
    text-transform: uppercase;

    cursor: pointer;

    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.yellow};

    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }

    &:disabled {
      background: ${(props) => props.theme['yellow-light']};

      cursor: not-allowed;
    }
  }
`

export const EmptyCartContainer = styled.div`
  min-height: 25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & svg {
    margin-bottom: 1rem;
    color: ${(props) => props.theme['yellow-light']};
  }
`
