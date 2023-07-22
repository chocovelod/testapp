import { FC, ReactNode } from "react";
import { Colors, Fonts, Layout, Utils } from "styles/tokens";
import { Global } from "./Global";
import { Reset } from "./Reset";

interface Props {
  children: ReactNode;
}

const StylesProvider: FC<Props> = ({ children }) => {
  return (
    <>
      <Colors />
      <Fonts />
      <Layout />
      <Utils />
      <Reset />
      <Global />
      {children}
    </>
  );
};

export { StylesProvider };
