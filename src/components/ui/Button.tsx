import cn from "classnames";
import { ButtonHTMLAttributes, FC, MouseEvent, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  href?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  secondary?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  ariaLabel?: string;
  prefetch?: boolean;
  children?: ReactNode;
  ref?: any;
}

const Button: FC<Props> = ({
  className,
  onClick,
  children,
  type,
  secondary,
  leftIcon,
  rightIcon,
  ariaLabel,
  prefetch = true,
}) => {
  return (
    <StyledButton
      aria-label={ariaLabel}
      as="button"
      onClick={onClick}
      className={cn(`${className} Font_14_18`, {
        Button_primary: !secondary,
        Button_secondary: secondary,
      })}
      type={type}
    >
      {leftIcon && (
        <div className="[ Button__iconContainer Button__leftIconContainer ]">
          {leftIcon}
        </div>
      )}
      {children && <span className="[ Button__label ]">{children}</span>}
      {rightIcon && (
        <div className="[ Button__iconContainer Button__rightIconContainer ]">
          {rightIcon}
        </div>
      )}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  padding: 6px 8px;

  &.Button_primary {
    background: #0080ff;
    color: #ffffff;

    svg {
      path {
        fill: #fff;
      }
    }
  }

  &.Button_primary:hover {
    box-shadow: 0px 0px 0px 2px #e1eefd;
  }

  &.Button_secondary {
    background: #ffffff;
    box-shadow: inset 0 0 0 1px #cacfdb;
    color: #10111d;
  }

  &.Button_secondary:hover {
    box-shadow: inset 0 0 0 1px #0080ff;
    svg {
      path {
        fill: #0080ff;
      }
    }
  }

  .Button__label {
    text-align: center;
  }

  .Button__iconContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Button__rightIconContainer {
    margin-left: 8px;
  }

  .Button__leftIconContainer {
    margin-right: 8px;
  }

  &.Button_primary {
    .Button__iconContainer svg {
      fill: #ffffff;
    }
  }
`;

export { Button };
export type { Props as ButtonProps };
