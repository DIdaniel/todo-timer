import styled, { createGlobalStyle } from "styled-components";
import TodoApp from "./components/todo/TodoApp";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #DB524D;
  }
`;

function App() {
  return (
    <>
      <TodoApp />
      <GlobalStyle />
    </>
  );
}

export default App;
