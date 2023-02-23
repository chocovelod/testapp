import { Copy, Download, DropDownIcon, ScanSource, ShareLink } from "@/icons";
import data from "@/src/data/data.json";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { CopyButton } from "../CopyButton";
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
  name: string;
  fileName: string;
  fileWeight: string;
  ipAddressV4: string;
  ipAddressV6: string;
  link: string;
  icon: string;
  iconHover: string;
  additionalInfo: string;
};

const Accordion: FC<Props> = ({
  expanded: expandedProp,
  defaultExpanded,
  className,
  onChange,
  children,
  name,
  fileName,
  ipAddressV4,
  ipAddressV6,
  link,
  icon,
  additionalInfo,
  fileWeight,
  iconHover,
}) => {
  const tableContent: any = data;

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
        <div className="[ Accordion__headContent ]">
          <Image
            src={icon}
            width={26}
            height={26}
            alt=""
            className="[ Accordion__riskIcon ]"
          />
          <Image
            src={iconHover}
            width={26}
            height={26}
            alt=""
            className="[ Accordion__riskIconHover ]"
          />
          <div>{name}</div>
          <div className="[ Accordion__fileName ]">
            {fileName}
            <p className="[ Color_tertiary ]">{fileWeight}</p>
          </div>
          <CopyButton className="[ Accordion__copyButton ]">
            {ipAddressV4} <Copy />
          </CopyButton>
          <CopyButton className="[ Accordion__ipV6 ]">
            {ipAddressV6} <Copy />
          </CopyButton>
          <div className="[ Accordion__sourceLink ]">
            <ScanSource />
            <p>{link}</p>
            <ShareLink />
          </div>
        </div>
      </div>
      <div className="[ Accordion__content ]">
        <div className="[ Accordion__contentWrapper ]" ref={contentRef}>
          <div className="[ Accordion__text ] [ Font_24_32_450 sm:Font_18_26_450 Color_secondary ]">
            <p>Additional info</p>
            <p className="[ Accordion__additionalInfo ] [ Color_primary ]">
              {additionalInfo}
            </p>
            <div className="[ Accordion__buttonsContainer ]">
              <Button>Download</Button>
              <Button className="[ Accordion__dropdownButton ]">
                <Download />
                <span>Download as</span>
                <DropDownIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </StyledAccordion>
  );
};

const StyledAccordion = styled.div<{ contentWrapperHeight: number }>`
  .Accordion__headContent {
    display: grid;
    grid-template-columns: 24px 112px 175px 166px 198px 1fr;
    column-gap: 42px;
    align-items: center;
    padding: 17px 32px;
    width: 100%;
    border-bottom: 1px solid #cacfdb;
    border-radius: 4px;

    :hover {
      background-color: #10111d;
      color: white;

      .Accordion__riskIconHover {
        display: flex;
      }
      .Accordion__riskIcon {
        display: none;
      }
      .Accordion__copyButton,
      .Accordion__ipV6 {
        background-color: #10111d;
        color: white;
      }
    }
  }

  .Accordion__copyButton,
  .Accordion__ipV6:hover {
    :hover {
      svg {
        path {
          fill: #0080ff;
        }
      }
    }
  }

  background-color: #ffffff;
  box-shadow: inset 0 0 0 1px #cacfdb;
  border-radius: 4px;
  transition: 0.1s ease-in;

  &:last-of-type {
    .Accordion__content {
      border-bottom: unset;
    }
  }

  .Accordion__title {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
  }

  .Accordion__riskIconHover {
    display: none;
  }

  .Accordion__fileName {
    display: flex;

    p {
      margin-left: 4px;
    }
  }

  .Accordion__ipV6 {
    span {
      max-width: 164px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .Accordion__sourceLink {
    display: flex;
    align-items: center;

    p {
      padding-left: 4px;
      padding-right: 4px;
    }

    :hover {
      color: #0080ff;
      svg {
        path {
          fill: #0080ff;
        }
      }
    }
  }

  .Accordion__content {
    overflow-y: scroll;
    max-height: 208px;
  }

  .Accordion__contentWrapper {
    height: ${(props) => props.contentWrapperHeight}px;
    transition: height 0.175s ease;
  }

  .Accordion__text {
    padding: 24px 32px 32px 32px;
    word-wrap: break-word;
  }

  .Accordion__additionalInfo {
    margin-top: 8px;
  }

  .Accordion__buttonsContainer {
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;
  }

  .Accordion__dropdownButton {
    display: flex;
    align-items: center;
    margin-left: 16px;
    span {
      padding-left: 4px;
      padding-right: 4px;
    }

    svg {
      path {
        fill: #ffffff;
      }
    }
  }
`;

export { Accordion };
