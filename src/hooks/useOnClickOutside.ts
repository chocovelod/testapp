import { RefObject, useEffect } from "react";

interface Props {
  ref: RefObject<HTMLElement>;
  handler: () => void;
  exclusionElements?: RefObject<HTMLElement>[];
}

function useOnClickOutside({ ref, handler, exclusionElements }: Props) {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      if (exclusionElements?.some((el) => el.current?.contains(event.target as Node))) return;

      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, exclusionElements]);
}

export { useOnClickOutside };
