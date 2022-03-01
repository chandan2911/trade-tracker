import React from "react";
import { useDispatch } from "react-redux";
import { setCurrency } from "../../redux/currencySlice";
import "./DropDown.css";

const DropDown = () => {
  const dispatch = useDispatch();
  return (
    <div className="DropDown">
      <select
        onChange={(e) => {
          dispatch(setCurrency(e.target.value));
        }}
      >
        <option value="usd">USD</option>
        <option value="inr">INR</option>
        <option value="eur">EUR</option>
        <option value="aed">AED</option>
      </select>
    </div>
  );
};

export default DropDown;
