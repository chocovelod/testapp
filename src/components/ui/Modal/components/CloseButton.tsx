import { Close } from "icons";
import { FC } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  onClick: () => void;
}

const CloseButton: FC<Props> = ({ className, onClick }) => {
  return (
    <StyledCloseButton className={className} onClick={onClick}>
      <Close className="[ CloseButton__icon ]" />
    </StyledCloseButton>
  );
};

const StyledCloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0;

  .CloseButton__icon {
    width: 16px;
    height: 16px;
    fill: #000;
  }
`;

export { CloseButton };
