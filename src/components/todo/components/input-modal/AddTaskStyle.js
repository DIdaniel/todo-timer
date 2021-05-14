import styled from "styled-components/macro";

export const AddTaskWrapper = styled.div`
  border: 2px dashed #fff;
  opacity: 0.6;
  border-radius: 10px;
  height: 5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &::after {
    content: "";
    background-color: black;
    opacity: 0.2;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

// export const InnerWrapper = styled.div`
//   background-color: black;
//   opacity: 0.3;
//   height: 100%;
// `;

export const PlusBtn = styled.p`
  font-size: 1.7rem;
  color: #fff;
  margin-right: 1rem;
`;

// export const I = styled.i`
//   color: #fff;
// `;

export const Text = styled.p`
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  z-index: 999;
`;
