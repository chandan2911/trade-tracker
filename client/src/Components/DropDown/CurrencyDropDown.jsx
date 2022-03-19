import React from "react";
import { useDispatch } from "react-redux";
import { currencyArr } from "../../ExpectedValue";
import { setCurrency } from "../../redux/currencySlice";

const CurrencyDropdown = () => {
  const dispatch = useDispatch();

  return (
    <div className="Dropdown">
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

export default CurrencyDropdown;
