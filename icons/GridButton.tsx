import { FC, SVGAttributes } from "react";

const GridButton: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="12"
      height="12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 1v3.006h3V1H1Zm7.004 0v3.006h3V1h-3ZM1 7.994V11h3V7.994H1Zm7.004 0V11h3V7.994h-3ZM.2 0a.2.2 0 0 0-.2.2v4.606c0 .11.09.2.2.2h4.6a.2.2 0 0 0 .2-.2V.2a.2.2 0 0 0-.2-.2H.2Zm7.004 0a.2.2 0 0 0-.2.2v4.606c0 .11.09.2.2.2h4.6a.2.2 0 0 0 .2-.2V.2a.2.2 0 0 0-.2-.2h-4.6ZM0 7.194c0-.11.09-.2.2-.2h4.6c.11 0 .2.09.2.2V11.8a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2V7.194Zm7.204-.2a.2.2 0 0 0-.2.2V11.8c0 .11.09.2.2.2h4.6a.2.2 0 0 0 .2-.2V7.194a.2.2 0 0 0-.2-.2h-4.6Z"
        fill="#10111D"
      />
    </svg>
  );
};

export { GridButton };
