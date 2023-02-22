import { usePressEscape } from "@/src/hooks/usePressEscape";
import { TrapFocus } from "@/src/prc/TrapFocus";
import { FC, ReactNode, RefObject, useCallback } from "react";
import styled from "styled-components";
import { ModalContext } from "./context/ModalContext";

interface Props {
  isOpen: boolean;
  focusAfterClose?: RefObject<HTMLElement>;
  onClose: () => void;
  children: ReactNode;
}

const PRCModal: FC<Props> = ({
  isOpen,
  focusAfterClose,
  onClose,
  children,
}) => {
  const handleClose = useCallback(() => {
    onClose();

    if (
      focusAfterClose?.current &&
      typeof focusAfterClose.current.focus === "function"
    ) {
      focusAfterClose.current.focus();
    }
  }, [onClose, focusAfterClose]);

  usePressEscape(handleClose);

  if (!isOpen) {
    return null;
  }

  return (
    <ModalContext.Provider value={{ onClose: handleClose }}>
      <TrapFocus>
        <StyledPRCModal>{children}</StyledPRCModal>
      </TrapFocus>
    </ModalContext.Provider>
  );
};

const StyledPRCModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 200;
`;

export { PRCModal };
