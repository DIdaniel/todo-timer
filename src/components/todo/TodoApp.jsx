import React, { useState } from "react";
import styled from "styled-components/macro";

import Header from "./components/header/Header";
import TodoList from "./components/todo/TodoList";
import InputModal from "./components/input-modal/InputModal";
import AddTask from "./components/input-modal/AddTask";
import Task from "./components/task/Task";

const AppGlobal = styled.div`
  min-width: 420px;
`;

const TodoApp = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [modal, setModal] = useState(false);

  console.log("todos : ", todos);
  console.log("inputText : ", inputText);

  const modalHandler = () => {
    setModal(modal != true);
  };

  return (
    <AppGlobal>
      <Header />
      <Task />
      <TodoList todos={todos} setTodos={setTodos} />
      {modal === false ? (
        <div onClick={modalHandler}>
          <AddTask modal={modal} setModal={setModal} />
        </div>
      ) : (
        <InputModal
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          modalHandler={modalHandler}
          // modal={modal}
          // setModal={setModal}
        />
      )}
    </AppGlobal>
  );
};

export default TodoApp;
