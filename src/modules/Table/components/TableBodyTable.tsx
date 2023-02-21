import styled from "styled-components";
import data from "../../../data/data.json";
import { TableItems } from "./TableItems";

const TableBodyTable = () => {
  const tableContent: any = data;

  return (
    <StyledTableBodyTable>
      <tr className="[ TableBody__head ] [ Color_secondary ]">
        <th>Name</th>
        <th>File name</th>
        <th>IP Address v4</th>
        <th>IP Address v6</th>
        <th>Scan source</th>
      </tr>
      <TableItems content={tableContent} />
    </StyledTableBodyTable>
  );
};

const StyledTableBodyTable = styled.div`
  width: 100%;
  margin-top: 32px;

  .TableBody__head {
    display: flex;
  }
`;

export { TableBodyTable };
