import { Modal } from "@/src/components/ui/Modal/Modal";
import { FC, RefObject } from "react";
import styled from "styled-components";
import data from "../../../data/data.json";
import { InfoModalContent } from "./InfoModalContent";

interface Props {
  isOpen: boolean;
  focusAfterClose?: RefObject<HTMLElement>;
  onClose: () => void;
}

const InfoModal: FC<Props> = ({ isOpen, focusAfterClose, onClose }) => {
  const content: any = data;

  return (
    <Modal
      isOpen={isOpen}
      focusAfterClose={focusAfterClose}
      onClose={onClose}
      ariaLabel="Partner info"
      withCloseButton
    >
      <div>
        <InfoModalContent content={content} />
      </div>
    </Modal>
  );
};

const StyledInfoModal = styled.div`
  .test {
    padding: 80px;
    color: red;
    background-color: #ffffff;
  }
`;

export { InfoModal };
