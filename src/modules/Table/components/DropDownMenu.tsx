import { FC, ReactNode } from "react";
import styled from "styled-components";

export interface Props {
  className?: string;
  children?: ReactNode;
}

const DropDownMenu: FC<Props> = ({ className, children }) => {
  return (
    <StyledDropDownMenu className={className}>
      <ul className="[ DropDownMenu ] [ Color_primary ]">{children}</ul>
    </StyledDropDownMenu>
  );
};

const StyledDropDownMenu = styled.div`
  position: relative;
  .DropDownMenu {
    position: absolute;

    padding-top: 4px;
    padding-bottom: 4px;
    width: max-content;
    background: #ffffff;
    /* padding: 8px 16px; */
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 2px;

    li {
      padding: 4px 16px;
    }

    li:hover {
      cursor: pointer;
      background-color: #e1eefd;
      color: #0080ff;
    }

    li:not(:first-child) {
      /* margin-top: 8px; */
    }
  }
`;

export { DropDownMenu };
