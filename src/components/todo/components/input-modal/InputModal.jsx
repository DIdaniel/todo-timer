import React from "react";
import {
  ModalWrapper,
  Input,
  EstWrapper,
  Est,
  EstInput,
  EstButton,
  ButtonWrapper,
  Button,
} from "./InputModalStyle";

const Form = ({ inputText, setInputText, todos, setTodos, modalHandler }) => {
  const inputTextHandler = (e) => {
    console.log("inputTexthandler : ", e.target.value);
    setInputText(e.target.value);
  };

  const todoSubmitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        id: Math.random() * 100,
      },
    ]);
    setInputText("");
  };

  return (
    <>
      <ModalWrapper>
        <Input
          onChange={inputTextHandler}
          value={inputText}
          type="text"
          placeholder="What are you working on?"
        />
        <EstWrapper>
          <Est>Est pomodoros</Est>
          <div>
            <EstInput type="number" value="0" />
            <EstButton>
              <i className="fas fa-caret-up"></i>
            </EstButton>
            <EstButton>
              <i className="fas fa-caret-down"></i>
            </EstButton>
          </div>
        </EstWrapper>
      </ModalWrapper>
      <ButtonWrapper>
        <Button type="submit" onClick={todoSubmitHandler} normal>
          Save
        </Button>
        <div onClick={modalHandler}>
          <Button>Cancel</Button>
        </div>
      </ButtonWrapper>
    </>
  );
};

export default Form;
