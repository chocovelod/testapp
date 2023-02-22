import { useContext } from "react";
import { ModalContext } from "./context/ModalContext";

const usePRCModal = () => {
  const { onClose } = useContext(ModalContext);

  return { onClose };
};

export { usePRCModal };
