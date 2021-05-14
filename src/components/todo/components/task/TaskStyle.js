import styled from "styled-components/macro";

export const TaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  // border: 1px solid white;
`;

export const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.h2`
  font-weight: bold;
  color: #fff;
`;

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  width: 35px;
  height: 35px;
  background-color: #fff;
  opacity: 0.7;
  font-size: 1.3rem;
  cursor: pointer;
`;

export const UnderLine = styled.div`
  height: 2px;
  width: 100%;
  background-color: #fff;
`;
