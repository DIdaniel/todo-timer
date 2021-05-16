import React from "react";
import { Btn } from "./StartBtnStyle";

const StartBtn = ({ start, stop, reset, resume, status }) => {
  return (
    <div>
      {status === 0 ? <Btn onClick={start}>START</Btn> : ""}
      {status === 1 ? (
        <div>
          <Btn onClick={stop}>STOP</Btn>
          <Btn onClick={reset}>RESET</Btn>
        </div>
      ) : (
        ""
      )}
      {status === 2 ? (
        <div>
          <Btn onClick={resume}>RESUME</Btn>
          <Btn onClick={reset}>RESET</Btn>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default StartBtn;
