import { FC, SVGAttributes } from "react";

const CheckBox: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="12"
      height="12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="12" height="12" rx="2" fill="#0080FF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.747 3.2a.759.759 0 0 1 .516-.2.76.76 0 0 1 .517.198c.137.127.217.3.22.483a.671.671 0 0 1-.203.49L5.885 8.778a.773.773 0 0 1-1.058.018L2.233 6.354a.695.695 0 0 1-.17-.225.66.66 0 0 1 .151-.772.775.775 0 0 1 1.058.018l2.052 1.933L8.73 3.22a.225.225 0 0 1 .02-.02h-.002Z"
        fill="#fff"
      />
    </svg>
  );
};

export { CheckBox };
