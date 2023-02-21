import { Copy, ScanSource, ShareLink } from "@/icons";
import Image from "next/image";
import { FC } from "react";
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
  }[];
}

const TableItems: FC<Props> = ({ content }) => {
  return (
    <StyledTableItem>
      {content.map((tableItem, index) => (
        <li key={index} className="[ TableItem ]">
          <Image src={tableItem.icon} width={26} height={26} alt="" />
          <td data-th="Name">{tableItem.name}</td>
          <td>{tableItem.fileName}</td>
          <td>{tableItem.fileWeight}</td>
          <td>
            {tableItem.ipAddressV4} <Copy />
          </td>
          <td>
            {tableItem.ipAddressV6} <Copy />
          </td>
          <td>
            <ScanSource />
            {tableItem.link} <ShareLink />
          </td>
        </li>
      ))}
    </StyledTableItem>
  );
};

const StyledTableItem = styled.ul`
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
  }
`;

export { TableItems };
