import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url('../fonts/Inter-VariableFont_slnt\, wght.ttf')
        format('woff2 supports variations'),
      url('../fonts/Inter-VariableFont_slnt\,wght.ttf') format('woff2-variations');
    font-weight: 100 900;
  }
  html {
    font-size: 10px;
  }

  body {
    font-size: 1.4rem;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    background-color: #f5f5f5;
    color: rgba(0, 0, 0, 0.8);
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .link {
    color: #ee4d2d;
    font-size: 1.4rem;
    cursor: pointer;
  }
  ul {
    list-style: none;
  }
  :focus-visible {
    outline: none;
  }
  button {
    cursor: pointer;
    &:disabled {
      cursor: default;
    }
  }
  a {
    text-decoration: none;
  }
  svg {
    width: 1em;
    height: 1em;
    fill: currentColor;
  }

  .container {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
`

export default GlobalStyles
