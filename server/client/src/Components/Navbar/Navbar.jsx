import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setTheme } from "../../redux/themeSlice";
import CurrencyDropdown from "../DropDown/CurrencyDropDown";

import "./Navbar.css";
const Navbar = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        {" "}
        CryptoTracker
      </Link>
      <div
        onClick={() => {
          dispatch(setTheme(!isDark));
        }}
        className="isDarkTheme"
      >
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
      <CurrencyDropdown></CurrencyDropdown>
    </header>
  );
};

export default Navbar;
