import styled from "styled-components";

export const FeedbackOptionsList = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 0;
  align-items: center;
  text-align: center;
`;
export const FeedbackOptionBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  border-radius: 10px;
  width: 100px;
  height: 50px;
  color: #0a5999;
  font-size: 18px;
  font-weight: 600;
  border: 0px;
  background-color: #f1f735;
  transition: box-shadow 250ms cubic-bezier(0.42, 0, 0.58, 1);
  :hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
    background-color: #0a5999;
    color: #f1f735;
  }
`;
