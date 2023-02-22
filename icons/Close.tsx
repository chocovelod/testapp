import { FC, SVGAttributes } from "react";

const Close: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.706.294a1.004 1.004 0 0 0-1.42 0L8 6.58 1.714.294a1.004 1.004 0 1 0-1.42 1.42L6.58 8 .294 14.286a1.004 1.004 0 1 0 1.42 1.42L8 9.42l6.286 6.286a1.004 1.004 0 1 0 1.42-1.42L9.42 8l6.286-6.286a1.004 1.004 0 0 0 0-1.42Z"
        fill="#CACFDB"
      />
    </svg>
  );
};

export { Close };
