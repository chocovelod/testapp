import { Modal } from "@/src/components/ui/Modal/Modal";
import { FC, RefObject } from "react";
import { InfoModalContent } from "./InfoModalContent";

interface Props {
  isOpen: boolean;
  focusAfterClose?: RefObject<HTMLElement>;
  onClose: () => void;

  name: string;
  icon: string;
  additionalInfo: string;
}

const InfoModal: FC<Props> = ({
  isOpen,
  focusAfterClose,
  onClose,
  name,
  icon,
  additionalInfo,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      focusAfterClose={focusAfterClose}
      onClose={onClose}
      ariaLabel="Partner info"
      withCloseButton
    >
      <div>
        <InfoModalContent
          onClose={onClose}
          name={name}
          icon={icon}
          additionalInfo={additionalInfo}
        />
      </div>
    </Modal>
  );
};

export { InfoModal };
