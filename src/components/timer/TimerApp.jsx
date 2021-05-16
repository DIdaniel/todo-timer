import React, { useState } from "react";
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
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [inter, setInter] = useState();
  const [status, setStatus] = useState(0);

  let updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const start = () => {
    run();
    setStatus(1);
    setInter(setInterval(run, 10));
  };

  const stop = () => {
    clearInterval(inter);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(inter);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  const resume = () => {
    start();
  };

  return (
    <AppGlobal>
      <Menus />
      <Count time={time} />
      <StartBtn
        start={start}
        stop={stop}
        reset={reset}
        resume={resume}
        status={status}
      />
    </AppGlobal>
  );
};

export default TimerApp;
