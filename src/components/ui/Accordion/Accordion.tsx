import { Copy, Download, DropDownIcon, ScanSource, ShareLink } from "@/icons";
import { DropDownMenu } from "@/src/modules/Table/components";
import cn from "classnames";
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

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<any>();

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <StyledAccordion contentWrapperHeight={contentHeight} className={className}>
      <div className="[ Accordion ]" onClick={handleToggle}>
        <div
          className={cn("[ Accordion__headContent ]", {
            Accordion__headContent_expanded: expanded,
          })}
        >
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
          <CopyButton
            className="[ Accordion__copyButton ] [ Accordion__preventHover ]"
            onClick={(e: any) => {
              return e.stopPropagation();
            }}
          >
            <span>{ipAddressV4}</span>
            <Copy className="[ Accordion__copyIcon ]" />
          </CopyButton>
          <CopyButton
            className="[ Accordion__ipV6 ] [ Accordion__preventHover ]"
            onClick={(e: any) => {
              return e.stopPropagation();
            }}
          >
            <span className="[ Accordion__ipV6Content ]">{ipAddressV6}</span>
            <Copy className="[ Accordion__copyIcon ]" />
          </CopyButton>
          <div
            className="[ Accordion__sourceLink ] [ Accordion__preventHover ]"
            onClick={(e: any) => {
              return e.stopPropagation();
            }}
          >
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
            <div className="[ Accordion__buttonsContainer ]" ref={menuRef}>
              <Button>Download</Button>
              <Button
                className="[ Accordion__dropdownButton ]"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                leftIcon={<Download />}
                rightIcon={
                  <DropDownIcon
                    className={cn({ Accordion__dropDownIcon: isOpen })}
                  />
                }
              >
                Download as
              </Button>
              {isOpen && (
                <DropDownMenu className="[ Accordion__dropDownMenu ]">
                  <li>Document</li>
                  <li>Image</li>
                  <li>PDF</li>
                  <li>HTML</li>
                </DropDownMenu>
              )}
            </div>
          </div>
        </div>
      </div>
    </StyledAccordion>
  );
};

const StyledAccordion = styled.div<{ contentWrapperHeight: number }>`
  background-color: #ffffff;
  box-shadow: inset 0 0 0 1px #cacfdb;
  border-radius: 4px;

  .Accordion {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
  }

  .Accordion__headContent {
    display: grid;
    grid-template-columns: 24px 112px 175px 166px 198px 1fr;
    column-gap: 42px;
    align-items: center;
    padding: 17px 32px;
    width: 100%;
    border-radius: 4px;

    :hover:not(:has(.Accordion__preventHover:hover)) {
      background-color: #10111d;
      color: #ffffff;

      .Accordion__riskIconHover {
        display: flex;
      }
      .Accordion__riskIcon {
        display: none;
      }
      .Accordion__copyButton,
      .Accordion__ipV6 {
        background-color: #10111d;
        color: #ffffff;
      }
      .Accordion__fileName {
        p {
          color: #ffffff;
        }
      }
    }
  }

  .Accordion__headContent_expanded {
    border-bottom: 1px solid #cacfdb;
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
    max-width: 198px;
  }

  .Accordion__ipV6Content {
    max-width: 164px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .Accordion__copyIcon {
    margin-left: 8px;
    flex-shrink: 0;
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
  }

  .Accordion__downloadDropdown {
    right: 32px;
  }

  .Accordion__dropDownIcon {
    transform: rotate(180deg);
  }

  .Accordion__dropDownMenu {
    position: relative;
    top: 34px;
    right: 138px;

    ul {
      width: 138px;
    }
  }
`;

export { Accordion };
