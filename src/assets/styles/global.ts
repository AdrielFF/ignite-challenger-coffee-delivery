import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 768px) {

    html {
      font-size: 87.5%;
    }
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-dark']};
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button  {
    font-weight: 400;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
  }

  input {
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;

    padding: 0.75rem;
  }

  input[type='number'] {

    &::-webkit-inner-spin-button, 
    &::-webkit-outer-spin-button {
        appearance: none;
        margin: 0;
      }
  }
`
