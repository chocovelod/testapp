import { FC } from "react";
import styled from "styled-components";
import { usePRCModal } from "./usePRCModal";

interface Props {
  className: string;
}

const PRCModalOverlay: FC<Props> = ({ className }) => {
  const { onClose } = usePRCModal();

  return <StyledPRCModalOverlay className={className} onClick={onClose} />;
};

const StyledPRCModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export { PRCModalOverlay };
