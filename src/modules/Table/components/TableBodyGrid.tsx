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
  }[];
}

const TableBodyGrid: FC<Props> = ({ content }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = useCallback(() => setIsOpenModal(true), []);
  const handleCloseModal = useCallback(() => setIsOpenModal(false), []);

  useLockBodyScroll(isOpenModal);

  return (
    <StyledTableBodyGrid>
      <ul className="[ TableBodyGrid ]">
        {content.map((tableItem, index) => (
          <li key={index} className="[ TableBodyGrid__item ]">
            <div className="[ TableBodyGrid__indicatorLeft ]">
              <p className="[ Color_secondary ]">Risk level:</p>
              <div className="[ TableBodyGrid__riskIndicator ]">
                <Image src={tableItem.iconGrid} width={16} height={16} alt="" />
                <p>{tableItem.riskLevel}</p>
              </div>
              <p className="[ Color_secondary ]">Name:</p>
              <div>{tableItem.name}</div>
              <p className="[ Color_secondary ]">File name:</p>
              <div className="[ TableBodyGrid__fileNameContainer ]">
                <div className="[ TableBodyGrid__fileName ]">
                  {tableItem.fileName}
                </div>
                <span className="[ TableBodyGrid__fileWeight ] [ Color_tertiary ]">
                  {tableItem.fileWeight}
                </span>
              </div>
            </div>
            <div className="[ TableBodyGrid__indicatorRight ]">
              <p className="[ Color_secondary ]">IP Address v4:</p>
              <CopyButton className="[ TableBodyGrid__button ]">
                <span className="[ TableBodyGrid__indicator ]">
                  {tableItem.ipAddressV4}
                </span>
                <Copy className="[ TableBodyGrid__copyIcon ]" />
              </CopyButton>
              <p className="[ Color_secondary ]">IP Address v6:</p>
              <CopyButton className="[ TableBodyGrid__button ]">
                <span className="[ TableBodyGrid__indicator ]">
                  {tableItem.ipAddressV6}
                </span>
                <Copy className="[ TableBodyGrid__copyIcon ]" />
              </CopyButton>
              <p className="[ Color_secondary ]">Scan source:</p>
              <div className="[ TableBodyGrid__buttonContainer ]">
                <ScanSource className="[ TableBodyGrid__sourceIcon ]" />
                <span className="[ TableBodyGrid__shareButtonContent ]">
                  {tableItem.linkGrid}
                  <ShareLink className="[ TableBodyGrid__shareIcon ]" />
                </span>
              </div>
            </div>
            <Button
              onClick={handleOpenModal}
              className="[ TableBodyGrid__additionalButton ]"
            >
              Show additional info
            </Button>
            <InfoModal isOpen={isOpenModal} onClose={handleCloseModal} />
          </li>
        ))}
      </ul>
    </StyledTableBodyGrid>
  );
};

const StyledTableBodyGrid = styled.div`
  margin-top: 32px;

  .TableBodyGrid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 32px;
  }

  .TableBodyGrid__item {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 32px;
    row-gap: 36px;
    background-color: #fff;
    padding: 20px 32px 24px 32px;
    box-shadow: inset 0 0 0 1px #cacfdb;
    border-radius: 4px;
  }

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

    p {
      display: flex;
      align-items: center;
      min-width: 94px;
    }
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
    align-items: center;
    div {
      margin-left: 4px;
    }
  }

  .TableBodyGrid__shareButtonContent {
    display: flex;
    align-items: center;
    margin-left: 4px;
  }

  .TableBodyGrid__shareIcon {
    align-self: flex-end;
    margin-left: 4px;
    margin-bottom: 3px;
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

export { TableBodyGrid };
