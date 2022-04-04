import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currencyArr } from "../../ExpectedValue";
import { setCurrency } from "../../redux/currencySlice";
import "./DropDown.css";

const CurrencyDropdown = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.currency);
  const [toggle, setToggle] = useState(false);
  const handleChange = (currency) => {
    console.log("Hello");
    dispatch(setCurrency(currency));
  };
  return (
    <div className="CurrencyDropdown no-select">
      <div
        onClick={() => {
          setToggle(!toggle);
        }}
        className="dropbtn"
      >
        <span>{name.toUpperCase()}</span>
        {toggle ? (
          <i className="fa fa-angle-up"></i>
        ) : (
          <i className="fa fa-angle-down"></i>
        )}
      </div>

      {toggle && (
        <ul className="dropdown-content ">
          {currencyArr.map((currency) => (
            <li
              key={currency.uuid}
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
