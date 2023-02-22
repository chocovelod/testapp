import { Copy, ScanSource, ShareLink } from "@/icons";
import { Accordion } from "@/src/components/ui/Accordion";
import Image from "next/image";
import { FC, SetStateAction, useCallback, useState } from "react";
import styled from "styled-components";

interface Props {
  content: {
    id: string;
    name: string;
    fileName: string;
    fileWeight: string;
    ipAddressV4: string;
    ipAddressV6: string;
    link: string;
    icon: string;
    additionalInfo: string;
  }[];
}

const TableItems: FC<Props> = ({ content }) => {
  const [expanded, setExpanded] = useState();

  const handleChange = useCallback(
    (panelId: SetStateAction<any>) => (isExpanded: boolean) =>
      isExpanded ? setExpanded(panelId) : setExpanded(undefined),
    []
  );

  return (
    <StyledTableItem>
      {content.map((tableItem, index) => (
        <li key={index} className="[ TableItem ]">
          <Image src={tableItem.icon} width={26} height={26} alt="" />
          <div data-th="Name">{tableItem.name}</div>
          <div>{tableItem.fileName}</div>
          <div>{tableItem.fileWeight}</div>
          <div>
            {tableItem.ipAddressV4} <Copy />
          </div>
          <div>
            {tableItem.ipAddressV6} <Copy />
          </div>
          <div>
            <ScanSource />
            {tableItem.link} <ShareLink />
          </div>
          <Accordion
            key={tableItem.id}
            expanded={expanded === tableItem.id}
            onChange={handleChange(tableItem.id)}
            className="test"
          >
            <p className="[ TableItem__additionalItem ]">
              {tableItem.additionalInfo}
            </p>
          </Accordion>
        </li>
      ))}
    </StyledTableItem>
  );
};

const StyledTableItem = styled.ul`
  .test {
    width: 100px;
    border: 1px solid red;
  }

  .TableItem {
    display: flex;
    align-items: center;
    margin-top: 8px;
    padding: 18px 32px;
    background-color: #ffffff;
    border: 1px solid #cacfdb;
    border-radius: 4px;
    transition: 0.1s ease-in;

    :hover {
      background-color: #10111d;
      color: white;
    }

    .TableItem__additionalItem {
      word-wrap: break-word;
    }
  }
`;

export { TableItems };
