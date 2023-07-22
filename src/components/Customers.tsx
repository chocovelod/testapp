import Image from "next/image";
import styled from "styled-components";
import { Delete } from "../icons/Delete";
import { Edit } from "../icons/Edit";

const iconUrls = [
  "/userIcons/1.png",
  "/userIcons/2.png",
  "/userIcons/3.png",
  "/userIcons/4.png",
  "/userIcons/5.png",
  "/userIcons/6.png",
  "/userIcons/7.png",
];

interface CustomerData {
  name: string;
  company: string;
  email: string;
  role: boolean;
}

interface CustomersProps {
  users: CustomerData[];
  onDeleteUser: (index: number) => void;
  onEditUser: (index: number) => void;
}

const Customers = ({ users, onDeleteUser, onEditUser }: CustomersProps) => {
  const getNextIconUrl = (() => {
    let currentIconIndex = 0;
    return () => {
      const iconUrl = iconUrls[currentIconIndex];
      currentIconIndex = (currentIconIndex + 1) % iconUrls.length;
      return iconUrl;
    };
  })();

  return (
    <StyledCustomers>
      <h2>Customers</h2>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <td>
                <UserIcon>
                  <Image
                    src={getNextIconUrl()}
                    width={24}
                    height={24}
                    alt={`User Icon ${index}`}
                  />
                </UserIcon>
                {user.name}
              </td>
              <td>{user.company}</td>
              <td>{user.email}</td>
              <td>
                {user.role ? (
                  <UserRole className="User" />
                ) : (
                  <UserRole className="Admin" />
                )}
              </td>
              <td>
                <Button onClick={() => onEditUser(index)}>
                  <Edit />
                </Button>
                <Button onClick={() => onDeleteUser(index)}>
                  <Delete />
                </Button>
              </td>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </StyledCustomers>
  );
};

const StyledCustomers = styled.div`
  width: 100%;
  padding: 40px;
`;

const Table = styled.table`
  margin-top: 40px;
  width: 100%;
  border-collapse: separate;
  border-spacing: 12px;

  th,
  td {
    text-align: start;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  }

  td:first-child {
    display: flex;
    align-items: center;
  }

  th {
    color: #94a3b8;
  }
`;

const TableRow = styled.tr`
  .Admin {
    background-color: #0ea5e9;
  }

  .User {
    background-color: #e2e8f0;
  }
`;

const UserIcon = styled.div`
  padding: 4px;
  border-radius: 8px;
  background: #f1f5f9;
  width: 32px;
  height: 32px;
  margin-right: 8px;
`;

const UserRole = styled.div`
  width: 49px;
  height: 24px;
  border-radius: 4px;
`;

const Button = styled.button`
  height: 24px;
  margin-right: 16px;
`;

export { Customers };
export type { CustomerData };
