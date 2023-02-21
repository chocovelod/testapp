import { createGlobalStyle } from "styled-components";

const Layout = createGlobalStyle`
  .FullBleed {
    width: 100vw;
    margin-left: calc(50% - 50vw);
  }

  .Container {
    max-width: calc(1224px + 2 * 40px);
    margin-left: auto;
    margin-right: auto;
    padding-left: 40px;
    padding-right: 40px;
  }

  
`;

export { Layout };
