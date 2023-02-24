import { PRCModal, PRCModalOverlay, PRCModalWindow } from "@/src/prc/PRCModal";
import { FC, RefObject } from "react";
import styled from "styled-components";
import { CloseButton } from "./components";

interface Props {
  isOpen: boolean;
  focusAfterClose?: RefObject<HTMLElement>;
  ariaLabel: string;
  onClose: () => void;
  withCloseButton?: boolean;
  className?: string;
  children: any;
}

const Modal: FC<Props> = ({
  isOpen,
  focusAfterClose,
  ariaLabel,
  onClose,
  withCloseButton,
  children,
  className,
}) => {
  return (
    <StyledModal className={className}>
      <PRCModal
        isOpen={isOpen}
        onClose={onClose}
        focusAfterClose={focusAfterClose}
      >
        <PRCModalOverlay className="[ Modal__overlay ]" />
        <PRCModalWindow className="[ Modal__window ]" ariaLabel={ariaLabel}>
          {withCloseButton && (
            <CloseButton className="[ Modal__closeButton ]" onClick={onClose} />
          )}
          {children}
        </PRCModalWindow>
      </PRCModal>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  .Modal__overlay {
    background: rgba(16, 17, 29, 0.3);
  }

  .Modal__window {
    max-width: 100%;
    max-height: 100%;

    border-radius: 4px;
  }

  .Modal__closeButton {
    position: absolute;
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    top: 32px;
    right: 24px;
  }
`;

export { Modal };
