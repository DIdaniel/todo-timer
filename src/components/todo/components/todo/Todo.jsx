import React from "react";
import { TodoWrapper, BtnText, Button, I, Text } from "./TodoStyle";

const Todo = ({ text, todos, setTodos, todo }) => {
  const completedHandler = () => {};

  const deleteHandler = () => {
    setTodos(todos.filter((elem) => elem.id !== todo.id));
  };

  return (
    <TodoWrapper>
      <BtnText>
        <Button onClick={completedHandler}>
          <I className="fas fa-check-circle"></I>
        </Button>
        <liText>{text}</liText>
      </BtnText>
      <Button onClick={deleteHandler}>
        <I className="fas fa-trash"></I>
      </Button>
    </TodoWrapper>
  );
};

export default Todo;
