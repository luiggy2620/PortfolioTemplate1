import React from "react";
import { OptionMenu, IconMenu } from "./../elements/portfolio";

const MenuOption = ({ direccion, icon, label='', isDark }) => {



  return (
    <OptionMenu href={direccion} label={label} isDark={isDark}>
      <IconMenu icon={icon}></IconMenu>
      {label}
    </OptionMenu>
  );
};

export default MenuOption;
