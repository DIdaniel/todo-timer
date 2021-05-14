import React from "react";
import {
  TaskWrapper,
  TaskHeader,
  Text,
  Button,
  BtnIcon,
  UnderLine,
} from "./TaskStyle";

const Task = () => {
  return (
    <TaskWrapper>
      <TaskHeader>
        <Text>Tasks</Text>
        <Button>
          <i class="fas fa-ellipsis-v"></i>
        </Button>
      </TaskHeader>
      <UnderLine></UnderLine>
    </TaskWrapper>
  );
};

export default Task;
