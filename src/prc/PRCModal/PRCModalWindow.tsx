import { FC, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  className: string;
  children: ReactNode;
  ariaLabel: string;
}

const PRCModalWindow: FC<Props> = ({ className, children, ariaLabel }) => {
  return (
    <StyledPRCModalWindow
      className={className}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
    >
      {children}
    </StyledPRCModalWindow>
  );
};

const StyledPRCModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export { PRCModalWindow };
