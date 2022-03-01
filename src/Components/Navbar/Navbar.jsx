import React from "react";
import { useSelector } from "react-redux";
import DropDown from "../DropDown/DropDown";
import "./Navbar.css";
const Navbar = () => {
  const count = useSelector((state) => state.count.value);
  return (
    <header className="navbar">
      <span className="logo">CryptoTracker</span>

      <DropDown></DropDown>
    </header>
  );
};

export default Navbar;
