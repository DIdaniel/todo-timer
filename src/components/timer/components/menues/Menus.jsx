import React, { useState } from "react";
import { MenusWrapper, Button } from "./MenusStyled";

const Menus = () => {
  const [clicked, setClicked] = useState(false);

  // const check = () => {
  //   if (clicked === true) {
  //   }
  // };

  return (
    <MenusWrapper>
      <Button>Timer</Button>
      <Button>Short Break</Button>
      <Button>Long Break</Button>
    </MenusWrapper>
  );
};

export default Menus;
