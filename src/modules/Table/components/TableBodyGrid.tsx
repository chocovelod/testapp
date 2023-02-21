import { Copy, ScanSource, ShareLink } from "@/icons";
import { CopyButton } from "@/src/components/ui";
import { Button } from "@/src/components/ui/Button";
import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";

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
    icon: string;
  }[];
}

const TableBodyGrid: FC<Props> = ({ content }) => {
  return (
    <StyledTableBodyGrid>
      <ul className="[ TableBodyGrid ]">
        {content.map((tableItem, index) => (
          <li key={index} className="[ TableBodyGrid__item ]">
            <div className="[ TableBodyGrid__indicatorLeft ]">
              <div className="[ TableBodyGrid__indicatorColumn ] [ Color_secondary ]">
                <p>Risk level:</p>
                <p>Name:</p>
                <p>File name:</p>
              </div>
              <div className="[ TableBodyGrid__indicatorColumn ]">
                <div className="[ TableBodyGrid__riskIndicator ]">
                  <Image src={tableItem.icon} width={16} height={16} alt="" />
                  <p>{tableItem.riskLevel}</p>
                </div>
                <div>{tableItem.name}</div>
                <div>
                  <span>{tableItem.fileName}</span>
                  <span className="[ Color_tertiary ]">
                    {tableItem.fileWeight}
                  </span>
                </div>
              </div>
            </div>
            <div className="[ TableBodyGrid__indicatorRight ]">
              <div className="[ TableBodyGrid__indicatorColumn ] [ Color_secondary ]">
                <p>IP Address v4:</p>
                <p>IP Address v6:</p>
                <p>Scan source:</p>
              </div>
              <div className="[ TableBodyGrid__indicatorColumn ]">
                <CopyButton className="[ TableBodyGrid__button ]">
                  <span className="[ TableBodyGrid__indicator ]">
                    {tableItem.ipAddressV4}
                  </span>
                  <Copy />
                </CopyButton>
                <CopyButton className="[ TableBodyGrid__button ]">
                  <span className="[ TableBodyGrid__indicator ]">
                    {tableItem.ipAddressV6}
                  </span>
                  <Copy />
                </CopyButton>
                <button className="[ test ]">
                  <ScanSource />
                  <span>
                    {tableItem.linkGrid}
                    <ShareLink className="test1" />
                  </span>
                </button>
              </div>
            </div>
            <Button className="[ TableBodyGrid__additionalButton ]">
              Show additional info
            </Button>
          </li>
        ))}
      </ul>
    </StyledTableBodyGrid>
  );
};

const StyledTableBodyGrid = styled.div`
  .test {
    display: flex;
    align-items: center;
    padding: 0;

    svg {
      flex-shrink: 0;
    }

    :hover {
      color: #0080ff;
      svg:not(:first-child) {
        path {
          fill: #0080ff;
        }
      }
    }
  }

  margin-top: 32px;

  .TableBodyGrid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 32px;
  }

  .TableBodyGrid__item {
    display: grid;
    grid-template-columns: 66px 1fr 94px 198px;
    grid-template-rows: 1fr 30px;
    grid-gap: 8px;
    background-color: #fff;
    padding: 20px 32px 24px 32px;
    box-shadow: inset 0 0 0 1px #cacfdb;
    border-radius: 4px;
  }

  .TableBodyGrid__indicatorLeft {
    display: grid;
    grid-template-columns: 66px 1fr;

    p {
      display: flex;
      align-items: center;
    }

    span {
      max-width: 84px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .TableBodyGrid__indicatorRight {
    display: grid;
    grid-template-columns: 94px 1fr;
    grid-column-start: 3;

    p {
      display: flex;
      align-items: center;
    }
  }

  .TableBodyGrid__indicator {
    max-width: 164px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
    span {
      max-width: 164px;
      padding-right: 8px;
    }

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
    grid-column-start: 4;
    grid-row-start: 2;
  }
`;

export { TableBodyGrid };
