import React from "react";

import Logo from "../Logo";
import { CloseIcon } from "../Icons/CloseIcon";
import { MenuIcon } from "../Icons/MenuIcon";
import MenuToggle from "./Menu/MenuToggle";
import MenuLinks from "./Menu/MenuLinks";
import NavBarContainer from "./NavBarContainer";

const NavBar = (props: any) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo
        w="100px"
        color={["white", "white", "primary.500", "primary.500"]}
      />
      <MenuToggle toggle={toggle} children={isOpen ? <CloseIcon /> : <MenuIcon />} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};
export default NavBar;
