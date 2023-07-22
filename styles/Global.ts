import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #10111D;
    -webkit-font-smoothing: antialiased;
    button,input:hover {
      cursor: pointer;
    }
    button {
      padding: 0;
      border: none;
      background: transparent;
    }
    
  }

  body > div[data-test-id=overlay-container] {
    z-index: 100;
  }
`;

export { Global };
