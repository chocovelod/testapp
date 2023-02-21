import { FC, SVGAttributes } from "react";

const Copy: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="10"
      height="12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9 2.743H7.667V1.029c0-.563-.454-1.029-1-1.029H1C.453 0 0 .466 0 1.029v7.2c0 .562.453 1.028 1 1.028h1.333v1.714c0 .563.454 1.029 1 1.029H9c.547 0 1-.466 1-1.029v-7.2c0-.562-.453-1.028-1-1.028ZM2.333 3.77V8.23H1v-7.2h5.667v1.714H3.333c-.546 0-1 .466-1 1.028Zm1 7.2H9v-7.2H3.333v7.2Z"
        fill="#CACFDB"
      />
    </svg>
  );
};

export { Copy };
