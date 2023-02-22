import {
  DropDownIcon,
  GridButton,
  GroupIcon,
  OrcaLogo,
  TableButton,
} from "@/icons";
import { SortIcon } from "@/icons/SortIcon";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import styled from "styled-components";
import data from "../../data/data.json";
import { TableBodyGrid, TableBodyTable } from "./components";

const Table = ({}) => {
  const tableContent: any = data;

  return (
    <StyledTable>
      <div className="[ Container ]">
        <Tabs>
          <div className="[ Table__head ]">
            <OrcaLogo />
            <div className="[ Table__headButtons ]">
              <div>
                <input type="checkbox" id="additionalItems" />
                <label htmlFor="additionalItems">Show additional items</label>
              </div>
              <button className="Table__headDropdownButton">
                <GroupIcon />
                <p>Group by</p>
                <DropDownIcon />
              </button>
              <button className="Table__headDropdownButton">
                <SortIcon />
                <p>Sort by</p> <DropDownIcon />
              </button>
              <TabList>
                <button className="Table__headTabsButton">
                  <Tab
                    selectedClassName="Table__selectedTab"
                    className="Table__unselectedTab"
                  >
                    <TableButton />
                  </Tab>
                  <Tab
                    selectedClassName="Table__selectedTab"
                    className="Table__unselectedTab"
                  >
                    <GridButton />
                  </Tab>
                </button>
              </TabList>
            </div>
          </div>
          <TabPanel>
            <TableBodyTable />
          </TabPanel>
          <TabPanel>
            <TableBodyGrid content={tableContent} />
          </TabPanel>
        </Tabs>
      </div>
    </StyledTable>
  );
};

const StyledTable = styled.section`
  .Table__menu {
    position: absolute;

    list-style-type: none;
    margin: 5px 0;
    padding: 0;

    border: 1px solid grey;
    width: 150px;
  }

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

  .Table__headTabsButton {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 16px;
    padding: 1px;
    border-radius: 4px;
    border: 1px solid #cacfdb;
    background-color: #ffffff;
  }

  .Table__unselectedTab {
    padding: 5px 8px;
  }

  .Table__selectedTab {
    border-radius: 4px;
    background-color: #0080ff;
    padding: 5px 8px;
    svg {
      path {
        fill: white;
      }
    }
  }
`;

export { Table };
