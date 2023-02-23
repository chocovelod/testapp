import cn from "classnames";
import { CheckBox } from "icons";
import { useState } from "react";
import styled from "styled-components";

const Checkbox = ({}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <StyledCheckbox>
      <input
        className="[ Checkbox__input ]"
        type="checkbox"
        onClick={() => {
          setIsChecked(!isChecked);
        }}
      />
      <span className="[ Checkbox__iconContainer ]">
        <CheckBox
          className={cn("[ Checkbox__icon ]", {
            Checkbox__icon_checked: isChecked,
          })}
        />
      </span>

      <div className="[ Checkbox__label ]">Show additional items</div>
    </StyledCheckbox>
  );
};

const StyledCheckbox = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    .Checkbox__iconContainer {
      box-shadow: inset 0 0 0 1px #0080ff;
    }
  }

  .Checkbox__input {
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
    padding: 0;
  }

  .Checkbox__iconContainer {
    width: 12px;
    height: 12px;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 0 1px #cacfdb;
    border-radius: 2px;
    background: white;
  }

  .Checkbox__icon {
    display: none;
  }

  .Checkbox__icon_checked {
    display: block;
  }

  .Checkbox__input:checked + .Checkbox__iconContainer {
    box-shadow: inset 0 0 0 1px #0080ff;
  }

  .Checkbox__input:disabled + .Checkbox__iconContainer {
    background: #c3c2c1;
  }

  &.Checkbox__valid {
    .Checkbox__iconContainer {
      width: 12px;
      height: 12px;
      display: flex;
      flex-shrink: 0;
      justify-content: center;
      align-items: center;
      box-shadow: inset 0 0 0 1px #0080ff;
      border-radius: 4px;
      background: white;
    }
  }

  .Checkbox__icon {
    width: 12px;
    height: 12px;
    fill: white;
  }

  .Checkbox__label {
    display: inline;
    margin-left: 8px;

    * {
      display: inline;
    }
  }
`;

export { Checkbox };
