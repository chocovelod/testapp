import { FC } from "react";
import styled from "styled-components";
import { TableCard } from "./TableCard";

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
  }[];
}

const TableBodyGrid: FC<Props> = ({ content }) => {
  return (
    <StyledTableBodyGrid>
      <ul className="[ TableBodyGrid ]">
        {content.map((tableItem, index) => (
          <li key={index}>
            <TableCard content={tableItem} />
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
`;

export { TableBodyGrid };
