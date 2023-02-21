import { FC, SVGAttributes } from "react";

const GroupIcon: FC<SVGAttributes<SVGElement>> = (props) => {
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
        d="M12 1.2A1.2 1.2 0 0 0 10.8 0H1.2A1.2 1.2 0 0 0 0 1.2v9.6A1.2 1.2 0 0 0 1.2 12h9.6a1.2 1.2 0 0 0 1.2-1.2V1.2ZM1 1h10v10H1V1Z"
        fill="#CACFDB"
      />
      <path
        d="M2.5 4.1a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5ZM4.5 7.7a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Z"
        fill="#CACFDB"
      />
    </svg>
  );
};

export { GroupIcon };
