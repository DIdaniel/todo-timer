import styled from "styled-components/macro";

export const MenusWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  //letter-spacing: 2px;
  font-size: 1.2rem;
  padding: 1rem;
  color: #fff;
  background-color: ${(props) => (props.checked ? "#be5551" : "inherit")};
  font-weight: ${(props) => (props.checked ? "bold" : "")};
  cursor: pointer;
`;
