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
  width: fit-content;
  max-width: 198px;
  padding: 4px 7px 4px 8px;
  border: 1px solid #cacfdb;
  border-radius: 4px;
  background-color: #ffffff;

  .CopyButton__content {
    display: flex;
    overflow: hidden;
    align-items: center;
    line-clamp: 1;
  }
`;

export { CopyButton };
