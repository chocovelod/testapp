import { FC, SVGAttributes } from "react";

const Download: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="12"
      height="12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 7.507v3.492H1V7.507a.5.5 0 0 0-1 0v3.992a.5.5 0 0 0 .5.5H11.41c.015 0 .03 0 .045-.002A.5.5 0 0 0 12 11.5V7.507a.5.5 0 1 0-1 0Z"
        fill="#fff"
      />
      <path
        d="M5.617 8.991a.5.5 0 0 0 .765 0l2.71-3.217a.5.5 0 0 0-.383-.822H6.545V.5a.5.5 0 0 0-1 0v4.452H3.291a.5.5 0 0 0-.383.822l2.71 3.217Z"
        fill="#fff"
      />
    </svg>
  );
};

export { Download };
