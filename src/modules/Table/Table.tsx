import { DropDownIcon, GroupIcon, OrcaLogo } from "@/icons";
import { SortIcon } from "@/icons/SortIcon";
import styled from "styled-components";
import { TableBodyGrid, TableBodyTable } from "./components";

const Table = () => {
  return (
    <StyledTable>
      <div className="[ Container ]">
        <div className="[ Table__head ]">
          <OrcaLogo />
          <div className="[ Table__headButtons ]">
            <div>
              <input type="checkbox" id="additionalItems" />
              <label htmlFor="additionalItems">Show additional items</label>
            </div>
            <button className="Table__headDropdownButton">
              <GroupIcon className="test" />
              <p>Group by</p>
              <DropDownIcon />
            </button>
            <button className="Table__headDropdownButton">
              <SortIcon />
              <p>Sort by</p> <DropDownIcon />
            </button>
          </div>
        </div>
        <TableBodyTable />
        <TableBodyGrid />
      </div>
    </StyledTable>
  );
};

const StyledTable = styled.section`
  padding-top: 261px;
  padding-bottom: 261px;
  background-color: #f3f4f9;

  .Table__head {
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;
    border-bottom: 1px solid #cacfdb;
  }

  .Table__headButtons {
    display: flex;
    align-items: center;
  }

  .Table__headDropdownButton:not(:first-child) {
    margin-left: 16px;
  }

  .Table__headDropdownButton {
    display: flex;
    align-items: center;
    padding: 6px 8px;
    border-radius: 4px;
    border: 1px solid #cacfdb;
    background-color: #ffffff;

    p {
      padding: 0 8px;
    }

    :hover {
      border: 1px solid #0080ff;
      svg {
        path {
          fill: #0080ff;
        }
      }
    }
  }

  .Table__headDropdownButton:not(:first-child) {
    margin-left: 16px;
  }
`;

export { Table };
