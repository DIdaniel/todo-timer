import styled, { keyframes } from "styled-components/macro";

const rotate = keyframes`
  from {
    transform: rotate(0)
  }
  to {
    transform: rotate(180deg)
  }
`;

const dorpdown = keyframes`
  from {
    transform: translate(0, -100%)
  }
  to {
    transform: translate(0, 0%)
  }
`;

export const ModalWrapper = styled.form`
  background-color: #fff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 2rem;
  overflow: hidden;
  animation: ${rotate} 0.3s linear;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  border: none;
  &:focus,
  &:active {
    outline: none;
  }
  ::placeholder {
    color: lightgray;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const EstWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const Est = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  height: 100%;
`;

export const EstInput = styled.input`
  max-width: 5rem;
  min-height: 2.5rem;
  background-color: #efefef;
  border-radius: 5px;
  margin-right: 1.5rem;
  padding-left: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  border: none;
`;

export const EstButton = styled.button`
  min-width: 3rem;
  min-height: 2.5rem;
  margin-left: 0.3rem;
  font-size: 1.3rem;
  color: #767676;
  border: 1px solid lightgrey;
  border-radius: 5px;
  box-shadow: -3px 6px 5px -5px rgba(6, 6, 6, 0.64);
  &:focus,
  &:active {
    cursor: pointer;
    box-shadow: none;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1rem;
  background-color: #efefef;
  max-width: 100%;
  min-height: 5rem;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  animation: ${rotate} 0.3s linear;
`;

export const Button = styled.button`
  border: none;
  margin-right: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  color: ${(props) => (props.normal ? "#fff" : "#b2b2b2")};
  background-color: ${(props) => (props.normal ? "#b2b2b2" : "inherit")};
`;
