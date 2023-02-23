import { FC } from "react";
import styled from "styled-components";

export interface Props {
  className?: string;
}

const DropDownMenu: FC<Props> = ({ className }) => {
  return (
    <StyledDropDownMenu className={className}>
      <ul className="[ DropDownMenu ]">
        <li>
          <button>Name</button>
        </li>
        <li>
          <button>File name</button>
        </li>
        <li>
          <button>IP Address v4</button>
        </li>
        <li>
          <button>IP Address v6</button>
        </li>
        <li>
          <button>Scan source</button>
        </li>
      </ul>
    </StyledDropDownMenu>
  );
};

const StyledDropDownMenu = styled.div`
  position: relative;
  .DropDownMenu {
    position: absolute;
    top: 20px;
    right: 0;

    width: 122px;
    background: #ffffff;
    padding: 8px 16px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 2px;

    button:hover {
      color: #0080ff;
    }

    li:not(:first-child) {
      margin-top: 8px;
    }
  }
`;

export { DropDownMenu };
