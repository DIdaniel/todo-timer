import { createGlobalStyle } from "styled-components";
import TimerApp from "./components/timer/TimerApp";
import TodoApp from "./components/todo/TodoApp";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 5rem 35rem;
    background-color: #DB524D;
  }
`;

function App() {
  return (
    <>
      <TimerApp />
      <TodoApp />
      <GlobalStyle />
    </>
  );
}

export default App;
