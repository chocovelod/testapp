import { FC } from "react";
import styled from "styled-components";

interface Props {
  content: {
    additionalInfo: string;
    name: string;
  }[];
}

const InfoModalContent: FC<Props> = ({ content }) => {
  return (
    <StyledInfoModalContent>
      <div>Hello</div>
    </StyledInfoModalContent>
  );
};

const StyledInfoModalContent = styled.div`
  width: 900px;
  background-color: #ffffff;
  padding: 50px 24px 70px 24px;
`;

export { InfoModalContent };
