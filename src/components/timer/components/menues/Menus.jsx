import React from "react";
import { MenusWrapper, Button } from "./MenusStyled";

const Menus = () => {
  return (
    <MenusWrapper>
      <Button checked>Default</Button>
      <Button>Short Break</Button>
      <Button>Long Break</Button>
    </MenusWrapper>
  );
};

export default Menus;
