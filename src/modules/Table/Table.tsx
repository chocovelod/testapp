import {
  DropDownIcon,
  GridButton,
  GroupIcon,
  OrcaLogo,
  TableButton,
} from "@/icons";
import { SortIcon } from "@/icons/SortIcon";
import { Button } from "@/src/components/ui/Button";
import cn from "classnames";
import { useEffect, useRef, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import styled from "styled-components";
import data from "../../data/data.json";
import { DropDownMenu, TableBodyGrid, TableBodyTable } from "./components";
import { Checkbox } from "./components/Checkbox";

const Table = ({}) => {
  const tableContent: any = data;
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<any>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <StyledTable>
      <div className="[ Container ]">
        <Tabs>
          <div className="[ Table__head ]">
            <OrcaLogo />
            <div className="[ Table__headButtons ]" ref={menuRef}>
              <Checkbox />
              <Button
                secondary
                className="[ Table__headDropdownButton ]"
                leftIcon={<GroupIcon />}
                rightIcon={<DropDownIcon />}
              >
                Group by
              </Button>
              <Button
                secondary
                leftIcon={<SortIcon />}
                rightIcon={
                  <DropDownIcon
                    className={cn({ Table__dropDownIcon: isOpen })}
                  />
                }
                className="[ Table__headDropdownButton ]"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Sort by
              </Button>
              {isOpen && (
                <DropDownMenu className="[ Table__dropDownMenu ]">
                  <li>Name</li>
                  <li>File name</li>
                  <li>IP Address v4</li>
                  <li>IP Address v6</li>
                  <li>Scan source</li>
                </DropDownMenu>
              )}
              <TabList>
                <button className="[ Table__headTabsButton ]">
                  <Tab
                    selectedClassName="[ Table__selectedTab ]"
                    className="[ Table__unselectedTab ]"
                  >
                    <TableButton />
                  </Tab>
                  <Tab
                    selectedClassName="[ Table__selectedTab ]"
                    className="[ Table__unselectedTab ]"
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
  padding-top: 261px;
  padding-bottom: 261px;
  background-color: #f3f4f9;

  .Table__head {
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    border-bottom: 1px solid #cacfdb;
  }

  .Table__headButtons {
    display: flex;
    align-items: center;
    place-self: flex-end;
  }

  .Table__headDropdownButton:not(:first-child) {
    margin-left: 16px;
  }

  .Table__dropDownMenu {
    top: 20px;
    right: 122px;
  }

  .Table__dropDownIcon {
    transform: rotate(180deg);
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

  .Table__unselectedTab:hover {
    svg {
      path {
        fill: #0080ff;
      }
    }
  }

  .Table__selectedTab {
    border-radius: 4px;
    background-color: #0080ff;
    padding: 5px 8px;
    svg {
      path {
        fill: white !important;
      }
    }
  }
`;

export { Table };
