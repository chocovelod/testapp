import { FC, SVGAttributes } from "react";

const SortIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="12"
      height="11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.452 3.802v6.608a.5.5 0 1 1-.998 0V3.802h.998Z"
        fill="#CACFDB"
      />
      <path
        d="M2.576.17a.5.5 0 0 1 .753 0l2.452 2.803a.5.5 0 0 1-.376.83H.5a.5.5 0 0 1-.376-.83L2.576.17ZM8.546 7.112V.504a.5.5 0 1 1 .998 0v6.608h-.998Z"
        fill="#CACFDB"
      />
      <path
        d="M8.669 10.743 6.217 7.941a.5.5 0 0 1 .376-.83h4.904a.5.5 0 0 1 .376.83l-2.452 2.802a.5.5 0 0 1-.752 0Z"
        fill="#CACFDB"
      />
    </svg>
  );
};

export { SortIcon };
