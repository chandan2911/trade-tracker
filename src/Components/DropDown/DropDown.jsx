import React from "react";
import "./DropDown.css";

const DropDown = () => {
  return (
    <div className="DropDown">
      <select>
        <option value="usd">USD</option>
        <option value="inr">INR</option>
        <option value="eur">EUR</option>
        <option value="aed">AED</option>
      </select>
    </div>
  );
};

export default DropDown;
