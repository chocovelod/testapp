import { FC, SVGAttributes } from "react";

const DropDownIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="8"
      height="6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 6 .098.795C-.185.417.185-.077.687.01l1.68.292c.421.073.849.11 1.278.11h.71c.429 0 .857-.037 1.278-.11L7.313.01c.502-.087.872.407.589.785L4 6Z"
        fill="#CACFDB"
      />
    </svg>
  );
};

export { DropDownIcon };
