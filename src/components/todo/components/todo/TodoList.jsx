import React from "react";
import Todo from "./Todo";
import { TodoListWrapper, ListWrapper } from "./TodoListStyle";

const TodoList = ({ todos, setTodos }) => {
  return (
    <TodoListWrapper>
      <ListWrapper>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
          />
        ))}
      </ListWrapper>
    </TodoListWrapper>
  );
};

export default TodoList;
