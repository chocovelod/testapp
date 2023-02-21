import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  body {
    font-family: 'Mulish', sans-serif;
    color: #10111D;
    -webkit-font-smoothing: antialiased;
    button,input:hover {
      cursor: pointer;
    }
    
  }

  body > div[data-test-id=overlay-container] {
    z-index: 100;
  }
`;

export { Global };
