import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  body {
    font-family: 'Mulish', sans-serif;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
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
