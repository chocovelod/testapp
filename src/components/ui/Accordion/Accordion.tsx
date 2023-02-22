import { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useControlled } from "./useControlled";

type Props = {
  title?: string;
  description?: string;
  defaultExpanded?: boolean;
  expanded?: boolean;
  className?: string;
  onChange?: (expanded: boolean) => void;
  button?: any;
  buttonLink?: any;
  children: any;
};

const Accordion: FC<Props> = ({
  title,
  expanded: expandedProp,
  defaultExpanded,
  className,
  onChange,
  button,
  buttonLink,
  children,
}) => {
  const [contentHeight, setContentHeight] = useState(0);

  const [expanded, setExpandedState] = useControlled({
    controlled: expandedProp,
    defaultValue: defaultExpanded,
  });

  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setExpandedState(!expanded);

    if (onChange) {
      onChange(!expanded);
    }
  };

  useEffect(() => {
    if (expanded && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [expanded]);

  return (
    <StyledAccordion contentWrapperHeight={contentHeight} className={className}>
      <div className="[ Accordion__title ]" onClick={handleToggle}>
        <h4 className="[ Color_black Font_24_32_600 sm:Font_18_26_700 Color_primary ]">
          {title}
        </h4>
      </div>
      <div className="[ Accordion__content ]">
        <div className="[ Accordion__contentWrapper ]" ref={contentRef}>
          <div className="[ Accordion__text ] [ Font_24_32_450 sm:Font_18_26_450 Color_secondary ]">
            {children}
          </div>
        </div>
      </div>
    </StyledAccordion>
  );
};

const StyledAccordion = styled.div<{ contentWrapperHeight: number }>`
  padding-bottom: 32px;

  &:last-of-type {
    .Accordion__content {
      border-bottom: unset;
    }
  }

  .Accordion__title {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding: 32px 0 0 0;
  }

  .Accordion__content {
    overflow: hidden;
    max-height: 208px;
  }

  .Accordion__contentWrapper {
    height: ${(props) => props.contentWrapperHeight}px;
    transition: height 0.175s ease;
    max-width: 90%;
  }

  .Accordion__button {
    width: fit-content;
    margin-bottom: 32px;
  }
`;

export { Accordion };
