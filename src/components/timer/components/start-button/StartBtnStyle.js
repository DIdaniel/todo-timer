import styled, { keyframes } from "styled-components/macro";

// export const BtnWrapper = styled.div`
//   display: flex;
// `;

const clickDown = keyframes`
  to{
    transform: rotate(180deg)
  }
`;

export const Btn = styled.button`
  width: 10rem;
  height: 5rem;
  line-height: 5rem;
  margin: 1rem;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  background-color: #db524d;
  color: #fff;
  cursor: pointer;
  animation: ${clickDown} 0.2s ease-in;
`;
