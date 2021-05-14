import React from "react";
import { AddTaskWrapper, PlusBtn, Text } from "./AddTaskStyle";

const AddTask = () => {
  return (
    <AddTaskWrapper>
      <PlusBtn>
        <i className="fas fa-plus-circle"></i>
      </PlusBtn>
      <Text>Add Task</Text>
    </AddTaskWrapper>
  );
};

export default AddTask;
