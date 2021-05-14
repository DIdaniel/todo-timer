import React from "react";
import styled from "styled-components/macro";

import Menus from "./components/menues/Menus";
import Count from "./components/count/Count";
import StartBtn from "./components/start-button/StartBtn";

const AppGlobal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  max-width: 100%;
  height: 350px;
  padding: 2rem 5rem;
`;

const TimerApp = () => {
  return (
    // <AppGlobal>
    <AppGlobal>
      <Menus />
      <Count />
      <StartBtn />
    </AppGlobal>
  );
};

export default TimerApp;
