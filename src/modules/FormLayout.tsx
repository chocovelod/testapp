import { useEffect, useState } from "react";
import styled from "styled-components";
import { CustomerData, Customers } from "../components/Customers";
import { Form, UserFormData } from "../components/Form";

const FormLayout = () => {
  const [users, setUsers] = useState<CustomerData[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(storedUsers);
  }, []);

  const handleSaveUser = (formData: UserFormData) => {
    if (editIndex !== null) {
      setUsers((prevUsers) => {
        const newUsers = [...prevUsers];
        newUsers[editIndex] = formData;
        localStorage.setItem("users", JSON.stringify(newUsers));
        return newUsers;
      });
      setEditIndex(null);
    } else {
      setUsers((prevUsers) => {
        const newUsers = [...prevUsers, formData];
        localStorage.setItem("users", JSON.stringify(newUsers));
        return newUsers;
      });
    }
  };

  const handleDeleteUser = (index: number) => {
    setUsers((prevUsers) => {
      const newUsers = [...prevUsers];
      newUsers.splice(index, 1);
      localStorage.setItem("users", JSON.stringify(newUsers));
      return newUsers;
    });
  };

  const handleEditUser = (index: number) => {
    setEditIndex(index);
  };
  return (
    <StyledFormLayout className="FormLayout">
      <Form
        handleSaveUser={handleSaveUser}
        editUserData={editIndex !== null ? users[editIndex] : null}
      />
      <Customers
        users={users}
        onDeleteUser={handleDeleteUser}
        onEditUser={handleEditUser}
      />
    </StyledFormLayout>
  );
};

const StyledFormLayout = styled.div`
  display: flex;
  height: 100vh;
`;

export { FormLayout };
