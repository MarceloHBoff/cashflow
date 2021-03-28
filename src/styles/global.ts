import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body, #root {
    background: ${props => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;

    width: 100vw;
    height: 100vh;
  }

  body, input, textarea, button {
    font: 400 16px Roboto, sans-serif;
    color: ${props => props.theme.colors.text};
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
