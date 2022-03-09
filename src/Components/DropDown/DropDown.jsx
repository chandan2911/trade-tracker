import React from "react";
import { useDispatch } from "react-redux";
import { setCurrency } from "../../redux/currencySlice";
import "./DropDown.css";

const DropDown = () => {
  const dispatch = useDispatch();
  const currencyArr = [
    {
      name: "usd",
      value: "$",
    },
    {
      name: "inr",
      value: "₹",
    },
    {
      name: "eur",
      value: "€",
    },
    {
      name: "aed",
      value: "د.إ",
    },
  ];
  return (
    <div className="DropDown">
      <select
        onChange={(e) => {
          let name = e.target.value;
          let symbol = currencyArr.find((item) => item.name === name).value;
          console.log(symbol);
          dispatch(setCurrency({ name, symbol }));
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
