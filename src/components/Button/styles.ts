import styled, { css } from 'styled-components'

interface ButtonContainerProps {
  variant: 'primary' | 'secondary'
  selected: boolean
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 1rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  color: ${(props) => props.theme['base-text']};
  background-color: ${(props) => props.theme['base-button']};

  text-transform: uppercase;
  font-size: 0.75rem;

  cursor: pointer;

  transition: background-color 0.1s;

  & svg {
    color: ${(prosp) => prosp.theme.purple};
  }

  ${(props) => {
    if (props.selected) {
      return css`
        background: ${(props) => props.theme['purple-light']};
        border: 1px solid ${(props) => props.theme.purple};
      `
    } else {
      return css`
        &:hover {
          background: ${(props) => props.theme['base-hover']};
        }
      `
    }
  }}
`
