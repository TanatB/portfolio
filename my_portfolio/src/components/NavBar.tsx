import { useState } from "react";
import "../App.css";

interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: string[];
}

function NavBar({ brandName, imageSrcPath, navItems }): NavBarProps {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return <h1>NavBar</h1>;
}

export default NavBar;
