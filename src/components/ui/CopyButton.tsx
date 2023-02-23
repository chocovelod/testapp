import { FC, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  children: ReactNode;
}

const CopyButton: FC<Props> = ({ className, children }) => {
  return (
    <StyledCopyButton className={className}>
      <span className="[ CopyButton__content ]">{children}</span>
    </StyledCopyButton>
  );
};

const StyledCopyButton = styled.button`
  display: flex;
  align-items: center;
  max-width: fit-content;

  padding: 4px 7px 4px 8px;
  border: 1px solid #cacfdb;
  border-radius: 4px;
  background-color: #ffffff;

  .CopyButton__content {
    display: flex;
    overflow: hidden;
    align-items: center;
  }
`;

export { CopyButton };
