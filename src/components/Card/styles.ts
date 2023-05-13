import styled, { css } from 'styled-components'

export interface CardContainerProps {
  size: 'small' | 'auto'
  variant: 'primary' | 'secondary'
}

export const CardContainer = styled.div<CardContainerProps>`
  background: ${(props) => props.theme['base-card']};

  ${(props) => {
    if (props.size === 'small') {
      return css`
        padding: 1.25rem;
      `
    } else if (props.size === 'auto') {
      return css`
        padding: 2.5rem;

        @media (max-width: 1150px) {
          padding: 2rem 1rem;
        }
      `
    }
  }}

  ${(props) => {
    if (props.variant === 'primary') {
      return css`
        border-radius: 6px;
      `
    } else if (props.variant === 'secondary') {
      return css`
        border-radius: 6px 36px;
      `
    }
  }}
`
