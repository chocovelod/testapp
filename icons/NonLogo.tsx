import { FC, SVGAttributes } from "react";

const NonLogo: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x=".5" y=".5" width="23" height="23" rx="3.5" stroke="#F8CD39" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-9.375a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75Zm0 6.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
        fill="#F8CD39"
      />
    </svg>
  );
};

export { NonLogo };
