import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currencyArr } from "../../../ExpectedValue";
import { setCurrency } from "../../../redux/currencySlice";
import "./CurrencyDropDown.css";

const CurrencyDropdown = () => {
  const dispatch = useDispatch();
  const { sign } = useSelector((state) => state.currency);
  const [toggle, setToggle] = useState(false);
  const handleChange = (currency) => {
    dispatch(setCurrency(currency));
  };
  return (
    <div className="CurrencyDropdown">
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
        className="dropbtn"
      >
        <span>Currency:{sign}</span>

        <i class="fa fa-angle-down"></i>
      </button>

      {toggle && (
        <ul className="dropdown-content">
          {currencyArr.map((currency) => (
            <li
              key={currency.uuid}
              value={currency.name}
              onClick={() => {
                handleChange(currency);
                setToggle(!toggle);
              }}
              className="dropdown-item"
            >
              {currency.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CurrencyDropdown;
