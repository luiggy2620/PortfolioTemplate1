import React from "react";
import { OptionMenu, IconMenu } from "./../elements/portfolio";

const MenuOption = ({ direccion, icon, label=''}) => {
  return (
    <OptionMenu href={direccion} label={label}>
      <IconMenu icon={icon}></IconMenu>
      {label}
    </OptionMenu>
  );
};

export default MenuOption;
