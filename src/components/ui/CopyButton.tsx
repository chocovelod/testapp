import { FC, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  children: ReactNode;
  onClick?: any;
}

const CopyButton: FC<Props> = ({ className, children, onClick }) => {
  return (
    <StyledCopyButton className={className} onClick={onClick}>
      <div className="[ CopyButton__content ]">{children}</div>
    </StyledCopyButton>
  );
};

const StyledCopyButton = styled.button`
  display: flex;
  align-items: center;
  max-width: max-content;
  justify-content: space-between;

  padding: 4px 7px 4px 8px;
  box-shadow: inset 0 0 0 1px #cacfdb;
  border-radius: 4px;
  background-color: #ffffff;

  .CopyButton__content {
    display: flex;
    overflow: hidden;
    align-items: center;
  }
`;

export { CopyButton };
