import styled from "styled-components/macro";

export const TodoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  min-width: 500px;
  height: 3rem;
  padding: 0.5rem 1rem;
  margin: 1rem 0rem;
`;

export const BtnText = styled.div`
  display: flex;
  align-items: center;
`;

export const I = styled.i`
  color: #dfdfdf;
`;

export const Button = styled.button`
  border: none;
  background-color: inherit;
  font-size: 2rem;
  margin-right: 1rem;
  cursor: pointer;
  &:checked + ${I} {
    color: #db524d;
  }
`;

export const Text = styled.li`
  list-style: none;
`;
