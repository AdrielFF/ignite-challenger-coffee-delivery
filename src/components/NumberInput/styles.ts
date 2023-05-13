import styled from 'styled-components'

export const NumberInputContainer = styled.div`
  width: 4.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};

  padding: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  & svg {
    color: ${(props) => props.theme.purple};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  & input[type='number'] {
    width: 1.25rem;
    border: 0;
    background: transparent;
    text-align: center;

    padding: 0.5rem 0;

    color: ${(props) => props.theme['base-title']};

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      appearance: none;
      margin: 0;
    }
  }
`
