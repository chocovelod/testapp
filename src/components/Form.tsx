import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HidePassword } from "../icons/HidePassword";
import { ShowPassword } from "../icons/ShowPassword";
import { CustomerData } from "./Customers";

interface UserFormData extends CustomerData {
  firstName?: string;
  lastName?: string;
  password?: string;
  company: string;
  email: string;
  role: boolean;
}

interface FormProps {
  handleSaveUser: (formData: UserFormData) => void;
  editUserData?: UserFormData | null;
}

interface RoleButtonProps {
  selected: boolean;
}

const Form = ({ handleSaveUser, editUserData }: FormProps) => {
  const [formData, setFormData] = useState<UserFormData>({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    password: "",
    role: true,
    name: "",
  });

  const [errors, setErrors] = useState<Partial<UserFormData>>({});
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      password: "",
      role: true,
      name: "",
    });
  };

  const [savedData, setSavedData] = useState<UserFormData | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    const formErrors: Partial<UserFormData> = {};

    if (!formData.firstName) {
      formErrors.firstName = "Required";
    }

    if (!formData.lastName) {
      formErrors.lastName = "Required";
    }

    if (!formData.email) {
      formErrors.email = "Invalid email";
    }

    if (!formData.company) {
      formErrors.company = "Required";
    }

    if (!formData.password) {
      formErrors.password = "8+ characters";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      resetForm();
      setSavedData(formData);
      handleSaveUser(formData as UserFormData);
    }
  };

  useEffect(() => {
    if (editUserData) {
      setFormData(editUserData);
      setSavedData(editUserData);
    }
  }, [editUserData]);

  const handleTogglePassword = (): void => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  useEffect(() => {
    const { firstName, lastName } = formData;
    setFormData((prevData) => ({
      ...prevData,
      name: `${firstName} ${lastName}`,
    }));
  }, [formData, formData.firstName, formData.lastName]);

  useEffect(() => {
    if (editUserData) {
      setFormData(editUserData);
    }
  }, [editUserData]);

  const handleRoleToggle = (role: boolean): void => {
    if (role === formData.role) {
      return;
    }

    setFormData((prevData) => ({ ...prevData, role }));
  };

  return (
    <StyledForm className="">
      <div className="Form">
        <h1 className="Font_20_150_700">
          {editUserData ? "Edit customer" : "Add customer"}
        </h1>
        <div className="From__content">
          <div className="Form__nameInput">
            <label
              htmlFor="firstName"
              className="Font_16_24_500 Color_secondary Form__label"
            >
              First name
            </label>
            <input
              type="text"
              name="firstName"
              className="Form__input"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {errors.firstName && (
              <p className="Form__error Color_error Font_14_20_400">
                {errors.firstName}
              </p>
            )}
          </div>
          <div className="Form__nameInput">
            <label
              htmlFor="lastName"
              className="Font_16_24_500 Color_secondary Form__label"
            >
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              className="Form__input"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {errors.lastName && (
              <p className="Form__error Color_error Font_14_20_400">
                {errors.lastName}
              </p>
            )}
          </div>
        </div>
        <label
          htmlFor="company"
          className="Font_16_24_500 Color_secondary Form__label"
        >
          Company
        </label>
        <input
          type="text"
          name="company"
          className="Form__input"
          value={formData.company}
          onChange={handleInputChange}
        />
        {errors.company && (
          <p className="Form__error Color_error Font_14_20_400">
            {errors.company}
          </p>
        )}
        <label className="Font_16_24_500 Color_secondary Form__label">
          Status
        </label>
        <RoleToggle>
          <RoleButton
            onClick={() => handleRoleToggle(true)}
            selected={formData.role}
          >
            User
          </RoleButton>
          <RoleButton
            onClick={() => handleRoleToggle(false)}
            selected={!formData.role}
          >
            Administrator
          </RoleButton>
        </RoleToggle>
        {errors.company && (
          <p className="Form__error Color_error Font_14_20_400">
            {errors.company}
          </p>
        )}
        <label
          htmlFor="email"
          className="Font_16_24_500 Color_secondary Form__label"
        >
          Email
        </label>
        <input
          className="Form__input"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && (
          <p className="Form__error Color_error Font_14_20_400">
            {errors.email}
          </p>
        )}
        {editUserData === null && (
          <div className="Form__nameInput">
            <label
              htmlFor="password"
              className="Font_16_24_500 Color_secondary Form__label"
            >
              Password
            </label>
            <div className="From__passwordInput">
              <input
                className="Form__input"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <PasswordToggle onClick={handleTogglePassword}>
                {showPassword ? <HidePassword /> : <ShowPassword />}
              </PasswordToggle>
            </div>
            {errors.password ? (
              <p className="Form__error Color_error Font_14_20_400">
                {errors.password}
              </p>
            ) : (
              <p className="Form__error Font_14_20_400 Color_secondary">
                8+ characters
              </p>
            )}
          </div>
        )}
      </div>
      <button
        onClick={handleSubmit}
        className="Form__saveButton Font_16_24_700"
      >
        Save
      </button>
    </StyledForm>
  );
};

const StyledForm = styled.div`
  padding: 40px;
  border-right: 1px solid #e2e8f0;
  &input {
    cursor: text !important;
  }
  .Form {
    display: flex;
    flex-direction: column;
  }

  .From__content {
    display: flex;
    gap: 10px;
  }

  .Form__nameInput {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .Form__label {
    margin-top: 20px;
  }

  .Form__input {
    border: 1px solid #e2e8f0;
    padding: 8px 12px;
    border-radius: 8px;
    margin-top: 10px;
    width: 100%;

    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    :hover {
      cursor: text;
    }
  }

  .Form__input:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px #bae6fd;
  }

  .From__passwordInput {
    position: relative;
  }

  .Form__error {
    margin-top: 10px;
  }

  .Form__saveButton {
    color: #ffffff;
    padding: 8px 12px;
    width: 100%;
    background: #0ea5e9;
    transition: 0.2s ease-out;
    border-radius: 8px;
    margin-top: 24px;
    :hover {
      background: #0284c7;
    }
  }
`;

const PasswordToggle = styled.button`
  margin-left: 4px;
  position: absolute;
  background: #ffffff;
  width: fit-content;
  height: 24px;
  top: 18px;
  right: 11px;
  cursor: pointer;
  color: blue;
  font-size: 14px;
`;

const RoleToggle = styled.div`
  background: #f1f5f9;
  border-radius: 4px;
  transition: 0.2s ease-out;
  padding: 4px;
  display: flex;
  gap: 8px;
  flex-direction: row;
  margin-top: 10px;
`;

const RoleButton = styled.button<RoleButtonProps>`
  width: 100%;
  background-color: ${({ selected }) => (selected ? "#ffffff" : "transparent")};
  border-radius: 4px;
  box-shadow: ${({ selected }) =>
    selected ? " 0px 1px 2px -1px #0000001a" : ""};
  box-shadow: ${({ selected }) =>
    selected ? "0px 1px 3px 0px #0000001a" : ""};
  transition: 0.2s ease-out;

  cursor: pointer;
  padding: 5px 10px;
  font-size: 14px;
`;
export { Form };
export type { UserFormData };
