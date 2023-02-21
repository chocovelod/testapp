import styled from "styled-components";
import data from "../../../data/data.json";
import { TableItems } from "./TableItems";

const TableBodyTable = () => {
  const tableContent: any = data;

  return (
    <StyledTableBodyTable>
      <tr className="[ TableBody__head ]">
        <th>Name</th>
        <th>File name</th>
        <th>Ith Address v4</th>
        <th>Ith Address v6</th>
        <th>Scan source</th>
      </tr>
      <TableItems content={tableContent} />
    </StyledTableBodyTable>
  );
};

const StyledTableBodyTable = styled.table`
  margin-top: 32px;

  .TableBody__head {
    display: flex;
  }
`;

export { TableBodyTable };
