import { useEffect } from "react";

const usePressEscape = (onEscape: () => void) => {
  useEffect(() => {
    const handleKeyPress = (e: { keyCode: number }) => {
      if (e.keyCode === 27) {
        onEscape();
      }
    };

    window.addEventListener("keyup", handleKeyPress, false);
    return () => window.removeEventListener("keyup", handleKeyPress, false);
  }, [onEscape]);
};

export { usePressEscape };
