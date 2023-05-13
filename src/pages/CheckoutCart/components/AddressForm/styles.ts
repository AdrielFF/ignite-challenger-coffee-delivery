import styled from 'styled-components'

export const AddressFormContainer = styled.form`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  grid-template-rows: 2.625rem 2.625rem 2.625rem 2.625rem;
  grid-column-gap: 0.75rem;
  grid-row-gap: 1rem;

  grid-template-areas:
    'cep . .'
    'street street street'
    'number complement complement'
    'neighborhood city state';

  @media (max-width: 575px) {
    display: flex;
    flex-direction: column;
  }

  & #cep-field {
    grid-area: cep;
  }

  & #street-field {
    grid-area: street;
  }

  & #number-field {
    grid-area: number;
  }

  & #complement-field {
    grid-area: complement;

    position: relative;
    &::after {
      content: 'optional';
      position: absolute;
      right: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      font-style: italic;

      color: ${(props) => {
        return props.theme['base-label']
      }};
    }

    & input {
      padding: 0.75rem 4.75rem 0.75rem 0.75rem;
    }
  }

  & #neighborhood-field {
    grid-area: neighborhood;
  }

  & #city-field {
    grid-area: city;
  }

  & #state-field {
    grid-area: state;
  }

  & label {
    display: block;
    visibility: hidden;
    width: 0;
    height: 0;
  }

  & input {
    width: 100%;
    height: 100%;

    &:disabled {
      opacity: 0.5;

      cursor: not-allowed;
    }
  }
`
export const CEPInputContainer = styled.div`
  position: relative;

  & label {
    display: block;
    position: absolute;
    width: 0;
  }
`
export const InvalidMessageContainer = styled.p`
  color: ${(props) => props.theme.red};
  position: absolute;
  font-size: 0.75rem;

  right: 0;
  top: 50%;
  transform: translate(calc(100% + 0.5rem), -50%);

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

  color: ${(props) => props.theme['purple-dark']};
`

export const LoaderContainer = styled(IconContainer)`
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
