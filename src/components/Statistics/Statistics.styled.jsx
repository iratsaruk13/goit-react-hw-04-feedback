import styled from "styled-components";

export const StatisticContainer = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 0;
`;

export const StatisticItem = styled.li`
  display: flex;
  padding: 7px;
  background-color: ${({ color }) => color};
  border-radius: 5px;
  color: black;
  list-style: none;
  transition: box-shadow 250ms cubic-bezier(0.42, 0, 0.58, 1);
  :hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  }
`;

export const StatisticValue = styled.p`
  margin: 0;
  font-weight: 600;
`;
