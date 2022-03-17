import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { currencyArr } from "../../ExpectedValue";
import { setCurrency } from "../../redux/currencySlice";
import "./DropDown.css";

const DropDown = () => {
  const dispatch = useDispatch();

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
        {currencyArr.map((currency) => (
          <option key={currency.uuid} value={currency.name}>
            {currency.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
