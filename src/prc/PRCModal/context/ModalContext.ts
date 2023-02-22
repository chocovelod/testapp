import { createContext } from "react";

const ModalContext = createContext({
  onClose: () => console.error("You have to implement onClose")
});

export { ModalContext };
