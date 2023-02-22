import { FC, ReactNode, useEffect, useRef } from "react";

interface Props {
  children?: ReactNode;
  focusFirst?: any;
}

const TrapFocus: FC<Props> = ({ focusFirst = true, children }) => {
  const containerRef = useRef<any | null>();

  useEffect(() => {
    if (!containerRef.current || !focusFirst) return;

    const focusableElements = containerRef.current.querySelectorAll(
      `button, input, [href], textarea, select, [tabindex]:not([tabindex="-1"])`
    );
    const firstFocusable = focusableElements[1];

    if (firstFocusable) {
      firstFocusable.focus();
    }
  }, [focusFirst]);

  const handleFocusFirstFocusable = () => {
    if (!containerRef.current) return;

    const focusableElements = containerRef.current.querySelectorAll(
      `button, input, [href], textarea, select, [tabindex]:not([tabindex="-1"])`
    );

    const firstFocusable = focusableElements[1];

    if (firstFocusable) {
      firstFocusable.focus();
    }
  };

  const handleFocusLastFocusable = () => {
    if (!containerRef.current) return;

    const focusableElements = containerRef.current.querySelectorAll(
      `button, input, [href], textarea, select, [tabindex]:not([tabindex="-1"])`
    );

    const firstFocusable = focusableElements[focusableElements.length - 2];

    if (firstFocusable) {
      firstFocusable.focus();
    }
  };

  return (
    <div ref={containerRef}>
      <div tabIndex={0} onFocus={handleFocusLastFocusable} />
      {children}
      <div tabIndex={0} onFocus={handleFocusFirstFocusable} />
    </div>
  );
};

export { TrapFocus };
