import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { currencyArr } from "../../../ExpectedValue";
import { setCurrency } from "../../../redux/currencySlice";
import "./CurrencyDropDown.css";

const CurrencyDropdown = () => {
  const dispatch = useDispatch();
  const { sign } = useSelector((state) => state.currency);

  const handleChange = (currency) => {
    dispatch(setCurrency(currency));
  };
  return (
    <div className="CurrencyDropdown">
      <button className="dropbtn">Currency:{sign} 🔽 </button>
      <div className="dropdown-content">
        {currencyArr.map((currency) => (
          <div 
            key={currency.uuid}
            value={currency.name}
            onClick={() => {
              handleChange(currency);
            }}
          >
            {currency.name}
          </div  >
        ))}
      </div>
    </div>
  );
};

export default CurrencyDropdown;
