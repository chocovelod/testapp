import styled from "styled-components";
import data from "../../../data/data.json";
import { TableItems } from "./TableItems";

const TableBodyTable = () => {
  const tableContent: any = data;

  return (
    <StyledTableBodyTable>
      <div className="[ TableBody__head ] [ Color_secondary ]">
        <p></p>
        <p>Name</p>
        <p>File name</p>
        <p>IP Address v4</p>
        <p>IP Address v6</p>
        <p>Scan source</p>
      </div>
      <TableItems content={tableContent} />
    </StyledTableBodyTable>
  );
};

const StyledTableBodyTable = styled.div`
  width: 100%;
  margin-top: 32px;

  .TableBody__head {
    display: grid;
    grid-template-columns: 24px 112px 175px 166px 198px 1fr;
    column-gap: 42px;
    align-items: center;
    padding-left: 32px;
  }
`;

export { TableBodyTable };
