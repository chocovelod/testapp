import { Copy, ScanSource, ShareLink } from "@/icons";
import { CopyButton } from "@/src/components/ui";
import { Button } from "@/src/components/ui/Button";
import { useLockBodyScroll } from "@/src/hooks";
import Image from "next/image";
import { FC, useCallback, useState } from "react";
import styled from "styled-components";
import { InfoModal } from "./InfoModal";

interface Props {
  content: {
    id: string;
    riskLevel: string;
    name: string;
    fileName: string;
    fileWeight: string;
    ipAddressV4: string;
    ipAddressV6: string;
    linkGrid: string;
    iconGrid: string;
    additionalInfo: string;
  };

  className?: string;
}

const TableCard: FC<Props> = ({ content, className }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = useCallback(() => setIsOpenModal(true), []);
  const handleCloseModal = useCallback(() => setIsOpenModal(false), []);

  useLockBodyScroll(isOpenModal);

  return (
    <StyledTableCard className={className}>
      <div className="[ TableBodyGrid__indicatorLeft ]">
        <div className="[ Color_secondary ]">Risk level:</div>
        <div className="[ TableBodyGrid__riskIndicator ]">
          <Image src={content.iconGrid} width={16} height={16} alt="" />
          <p>{content.riskLevel}</p>
        </div>
        <div className="[ Color_secondary ]">Name:</div>
        <div>{content.name}</div>
        <div className="[ Color_secondary ]">File name:</div>
        <div className="[ TableBodyGrid__fileNameContainer ]">
          <div className="[ TableBodyGrid__fileName ]">{content.fileName}</div>
          <span className="[ TableBodyGrid__fileWeight ] [ Color_tertiary ]">
            {content.fileWeight}
          </span>
        </div>
      </div>
      <div className="[ TableBodyGrid__indicatorRight ]">
        <div className="[ TableBodyGrid__indicatorName ] [ Color_secondary ]">
          IP Address v4:
        </div>
        <CopyButton className="[ TableBodyGrid__button ]">
          <span className="[ TableBodyGrid__indicator ]">
            {content.ipAddressV4}
          </span>
          <Copy className="[ TableBodyGrid__copyIcon ]" />
        </CopyButton>
        <div className="[ TableBodyGrid__indicatorName ] [ Color_secondary ]">
          IP Address v6:
        </div>
        <CopyButton className="[ TableBodyGrid__button ]">
          <span className="[ TableBodyGrid__indicator ]">
            {content.ipAddressV6}
          </span>
          <Copy className="[ TableBodyGrid__copyIcon ]" />
        </CopyButton>
        <div className="[ TableBodyGrid__indicatorName ][ Color_secondary ]">
          Scan source:
        </div>
        <button className="[ TableBodyGrid__buttonContainer ]">
          <ScanSource className="[ TableBodyGrid__sourceIcon ]" />
          <span className="[ TableBodyGrid__shareButtonContent ]">
            {content.linkGrid}
            <ShareLink className="[ TableBodyGrid__shareIcon ]" />
          </span>
        </button>
      </div>
      <Button
        onClick={handleOpenModal}
        className="[ TableBodyGrid__additionalButton ]"
      >
        Show additional info
      </Button>
      <InfoModal
        name={content.name}
        icon={content.iconGrid}
        additionalInfo={content.additionalInfo}
        isOpen={isOpenModal}
        onClose={handleCloseModal}
      />
    </StyledTableCard>
  );
};

const StyledTableCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 32px;
  row-gap: 38px;
  background-color: #fff;
  padding: 20px 32px 24px 32px;
  box-shadow: inset 0 0 0 1px #cacfdb;
  border-radius: 4px;

  .TableBodyGrid__indicatorLeft {
    display: grid;
    grid-template-columns: 66px 1fr;
    grid-template-rows: 18px 18px 18px;
    column-gap: 8px;
    row-gap: 16px;
    margin-top: 4px;

    p {
      display: flex;
      align-items: center;
    }
  }

  .TableBodyGrid__fileNameContainer {
    display: flex;
  }

  .TableBodyGrid__fileName {
    max-width: 84px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .TableBodyGrid__fileWeight {
    margin-left: 4px;
  }

  .TableBodyGrid__indicatorRight {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 26px 26px 26px;
    grid-column-start: 3;
    column-gap: 8px;
    row-gap: 8px;

    div {
      display: flex;
      min-width: 94px;
    }
  }

  .TableBodyGrid__indicatorName {
    display: flex;
    place-items: center;
  }

  .TableBodyGrid__indicator {
    max-width: 164px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .TableBodyGrid__copyIcon {
    margin-left: 8px;
  }

  .TableBodyGrid__buttonContainer {
    display: flex;
    margin-top: 4px;
    text-align: start;

    svg {
      flex-shrink: 0;
    }

    :hover {
      cursor: pointer;
      color: #0080ff;
      .TableBodyGrid__shareIcon {
        path {
          fill: #0080ff;
        }
      }
    }
  }

  .TableBodyGrid__sourceIcon {
    margin-top: 4px;
  }

  .TableBodyGrid__shareButtonContent {
    display: inline;
    align-items: center;
    margin-left: 4px;
  }

  .TableBodyGrid__shareIcon {
    align-self: flex-end;
    margin-left: 4px;
    flex-shrink: 0;
  }

  .TableBodyGrid__indicatorColumn {
    display: grid;
    row-gap: 16px;
    div {
      display: flex;
      align-items: center;
    }
  }

  .TableBodyGrid__riskIndicator {
    display: flex;
    align-items: center;
    p {
      margin-left: 4px;
    }
  }

  .TableBodyGrid__button {
    display: flex;
    align-items: center;

    svg {
      flex-shrink: 0;
    }
    svg:first-child {
      margin-right: 8px;
    }
  }

  .TableBodyGrid__button:hover {
    svg {
      path {
        fill: #0080ff;
      }
    }
  }

  .TableBodyGrid__additionalButton {
    max-width: 198px;
    width: 100%;
    place-self: flex-end;
    grid-column-start: 3;
    grid-row-start: 2;
  }
`;

export { TableCard };
