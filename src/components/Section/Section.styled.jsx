import styled from "styled-components";

const SectionContainer = styled.section`
  text-align: center;
  background-color: #a4f2b3;
  border-radius: 15px;
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: box-shadow 250ms cubic-bezier(0.42, 0, 0.58, 1);
  :hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h2`
  color: #065b0c;
`;

export { SectionContainer, Title };
