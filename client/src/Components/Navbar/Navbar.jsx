import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTheme } from "../../redux/themeSlice";

import DropDown from "../DropDown/DropDown";
import "./Navbar.css";
const Navbar = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);
  const navigate = useNavigate();
  return (
    <header className="navbar">
      <span
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        CryptoTracker
      </span>
      <div onClick={() => dispatch(setTheme())}>
        {isDark ? (
          <img
            src={require("../../assets/night-mode.png")}
            alt="light"
            width={40}
          />
        ) : (
          <img src={require("../../assets/sun.png")} alt="light" width={40} />
        )}
      </div>
      <DropDown></DropDown>
    </header>
  );
};

export default Navbar;