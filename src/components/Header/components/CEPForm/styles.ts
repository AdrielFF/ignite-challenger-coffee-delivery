import styled, { css } from 'styled-components'

interface CEPButtonContainerProps {
  isCEPSuccessedFilled: boolean
}

export const CEPButtonContainer = styled.div<CEPButtonContainerProps>`
  position: relative;
  border: 0;

  font-size: 0.875rem;
  border-radius: 8px;

  display: flex;
  align-items: center;

  & label {
    visibility: hidden;
    width: 0;
  }

  & input ~ p {
    visibility: hidden;
  }
  & input:focus ~ p {
    visibility: visible;
  }

  & input {
    font-family: 'Roboto Mono', monospace;

    ${(props) => {
      if (!props.isCEPSuccessedFilled) {
        return css`
          width: 2.375rem;
          color: ${(props) => props.theme['purple-light']};
        `
      }
    }}
    height: 2.375rem;

    background: ${(props) => props.theme['purple-light']};

    padding: 0.75rem;
    margin: 0;
    border: 0;

    transition: width 0.2s;

    &::placeholder {
      color: ${(props) => props.theme['purple-light']};
    }

    cursor: pointer;

    ${(props) => {
      if (props.isCEPSuccessedFilled) {
        return css`
          color: ${props.theme['purple-dark']};
          font-size: 0.875rem;
          padding: 0.75rem calc(0.75rem + 20px) 0.75rem 0.75rem;
        `
      }
    }}

    &:focus {
      color: ${(props) => props.theme['base-text']};

      ${(props) => {
        if (!props.isCEPSuccessedFilled) {
          return css`
            width: 9rem;
          `
        }
      }}
      cursor: text;

      &::placeholder {
        color: ${(props) => props.theme.purple};
      }
    }
  }

  & > svg {
    position: absolute;
    right: 0.5rem;
    pointer-events: none;
    color: ${(props) => props.theme['purple-dark']};

    ${(props) => {
      if (props.isCEPSuccessedFilled) {
        return css`
          &:hover {
            display: none;
          }
        `
      }
    }}
  }
`

export const RemoveCEPContainer = styled.button`
  position: absolute;
  left: 0;
  transform: translateX(calc(-100% - 0.5rem));

  background: transparent;
  border: 0;

  line-height: 0;

  color: ${(props) => props.theme['purple-dark']};

  cursor: pointer;
`

export const InvalidMessageContainer = styled.p`
  color: ${(props) => props.theme.red};
  position: absolute;
  font-size: 0.75rem;

  left: 0;
  top: 50%;
  transform: translate(calc(-100% - 0.5rem), -50%);

  @media (max-width: 575px) {
    top: 0;
    left: 0;
    transform: translate(0, calc(-100% - 0.5rem));
  }
`

export const IconContainer = styled.span`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;

  width: 1.375rem;
  height: 1.375rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme['purple-dark']};
`

export const CEPInputContainer = styled.div`
  position: relative;

  & label {
    display: block;
    position: absolute;
    width: 0;
  }
`

export const LoaderContainer = styled(IconContainer)`
  width: 1.375rem;
  height: 1.375rem;

  & svg {
    animation: loading 1s linear infinite;
    transform-origin: center;

    @keyframes loading {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`
