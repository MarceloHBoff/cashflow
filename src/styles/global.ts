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

  .modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    width: 100%;
    max-width: 40rem;
    background:  ${props => props.theme.colors.background};
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
    box-shadow: 10px 10px 10px 1px rgba(0, 0, 0, 0.3);
  }

  .close-modal {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`
