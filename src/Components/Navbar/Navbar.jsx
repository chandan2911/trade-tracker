import React from "react";
import DropDown from "../DropDown/DropDown";
import "./Navbar.css";
const Navbar = () => {
  return (
    <header className="navbar">
      <span className="logo">CryptoTracker</span>
      <DropDown></DropDown>
    </header>
  );
};

export default Navbar;
