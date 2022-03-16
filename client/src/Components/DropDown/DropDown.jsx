import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "../../redux/currencySlice";
import "./DropDown.css";

const DropDown = () => {
  const dispatch = useDispatch();
  const currencyArr = [
    {
      uuid: "6mUvpzCc2lFo",
      name: "INR",
      sign: "₹",
    },
    {
      uuid: "yhjMzLPhuIDl",

      name: "USD",
      sign: "$",
    },
    {
      uuid: "5k-_VTxqtCEI",
      name: "EUR",
      sign: "€",
    },
    {
      uuid: "Hokyui45Z38f",
      name: "GBP",
      sign: "£",
    },
  ];
  const currency = useSelector((state) => state.currency);

  return (
    <div className="DropDown">
      <select
        onChange={(e) => {
          let name = e.target.value.toUpperCase();
          const currency = currencyArr.find(
            (currency) => currency.name === name
          );
          dispatch(setCurrency(currency));
        }}
      >
        <option value="usd">DOLLAR</option>
        <option value="inr">RUPEE</option>
        <option value="eur">EURO</option>
        <option value="gbp">POUND</option>
      </select>
    </div>
  );
};

export default DropDown;
