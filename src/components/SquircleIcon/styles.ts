import styled, { css } from 'styled-components'

export interface SquircleIconContainerType {
  color: 'yellow-dark' | 'base-card'
  background: 'yellow-light' | 'purple-dark'
}

export const SquircleIconContainer = styled.span<SquircleIconContainerType>`
  background: ${(props) => props.theme[props.background]};
  color: ${(props) => props.theme[props.color]};
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: background-color 0.1s;

  ${(props) => {
    if (props.background === 'purple-dark') {
      return css`
        &:hover {
          background-color: ${(props) => props.theme.purple};
        }
      `
    }
  }}
`
