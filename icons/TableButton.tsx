import { FC, SVGAttributes } from "react";

const TableButton: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="12"
      height="12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.2A1.2 1.2 0 0 0 10.8 0H1.2A1.2 1.2 0 0 0 0 1.2v9.6A1.2 1.2 0 0 0 1.2 12h9.6a1.2 1.2 0 0 0 1.2-1.2V1.2ZM1 1h10v2.662H1V1Zm0 3.676h10V7.33H1V4.676Zm0 3.662V11h10V8.338H1Z"
        fill="#10111D"
      />
    </svg>
  );
};

export { TableButton };
