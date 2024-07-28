

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-family: 'proxima-nova', sans-serif;
    background-color: black;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

export default GlobalStyle;

