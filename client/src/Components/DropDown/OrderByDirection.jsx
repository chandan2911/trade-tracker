import React from "react";
import { useDispatch } from "react-redux";
import { orderDirectionsArr } from "../../ExpectedValue";
import { setOrderDirection } from "../../redux/orderDirectionSlice";

const OrderByDirection = () => {
  const dispatch = useDispatch();
  return (
    <div className="Dropdown">
      <select
        onChange={(e) => {
          dispatch(setOrderDirection(e.target.value));
        }}
      >
        {orderDirectionsArr.map((orderby) => (
          <option key={orderby} value={orderby}>
            {orderby}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OrderByDirection;
