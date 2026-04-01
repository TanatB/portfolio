import { useState } from "react";
import "../App.css";

interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: string[];
}

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <a href="home font-medium">Home</a>
        </li>
        <li>
          <a href="home">About me</a>
        </li>
        <li>
          <a href="home">Experience</a>
        </li>
        <li>
          <a href="home">Projects</a>
        </li>
      </ul>
      <div className="rightNav">
        <button className="btn contact-me"> Contact</button>
      </div>
    </nav>
  );
};

export default NavBar;
