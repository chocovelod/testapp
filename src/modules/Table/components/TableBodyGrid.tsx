import { Copy, ScanSource, ShareLink } from "@/icons";
import { CopyButton } from "@/src/components";
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
    link: string;
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
                  <span>{tableItem.fileWeight}</span>
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
                  <span>{tableItem.ipAddressV4}</span>
                  <Copy />
                </CopyButton>
                <CopyButton className="[ TableBodyGrid__button ]">
                  <span>{tableItem.ipAddressV6}</span>
                  <Copy />
                </CopyButton>
                <CopyButton className="[ TableBodyGrid__button ]">
                  <ScanSource />
                  <span>{tableItem.link}</span>
                  <ShareLink />
                </CopyButton>
              </div>
            </div>
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
    display: flex;
    background-color: #fff;
    padding: 20px 32px 24px 32px;
    border: 1px solid #cacfdb;
    border-radius: 4px;
  }

  .TableBodyGrid__indicatorLeft {
    display: grid;
    grid-template-columns: 66px 112px;
    gap: 16px 8px;

    p {
      display: flex;
      align-items: center;
    }
  }

  .TableBodyGrid__indicatorRight {
    display: grid;
    grid-template-columns: 94px 198px;
    gap: 16px 8px;
    margin-left: 32px;

    p {
      display: flex;
      align-items: center;
    }
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
  }

  .TableBodyGrid__button {
    span {
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
`;

export { TableBodyGrid };
