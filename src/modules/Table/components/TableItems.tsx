import { Accordion } from "@/src/components/ui/Accordion";
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
    iconHover: string;
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
          <Accordion
            name={tableItem.name}
            fileName={tableItem.fileName}
            ipAddressV4={tableItem.ipAddressV4}
            ipAddressV6={tableItem.ipAddressV6}
            fileWeight={tableItem.fileWeight}
            link={tableItem.link}
            icon={tableItem.icon}
            iconHover={tableItem.iconHover}
            additionalInfo={tableItem.additionalInfo}
            key={tableItem.id}
            expanded={expanded === tableItem.id}
            onChange={handleChange(tableItem.id)}
          >
            <></>
          </Accordion>
        </li>
      ))}
    </StyledTableItem>
  );
};

const StyledTableItem = styled.ul`
  .TableItem {
    margin-top: 8px;
    .TableItem__additionalItem {
      word-wrap: break-word;
    }
  }
`;

export { TableItems };
