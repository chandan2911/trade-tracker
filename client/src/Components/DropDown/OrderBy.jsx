import React from "react";
import { useDispatch } from "react-redux";
import { orderByArr } from "../../ExpectedValue";
import { setOrderBy } from "../../redux/orderBySlice";

const OrderBy = () => {
  const dispatch = useDispatch();
  return (
    <div className="Dropdown">
      <select
        onChange={(e) => {
          dispatch(setOrderBy(e.target.value));
        }}
      >
        {orderByArr.map((orderby) => (
          <option key={orderby} value={orderby}>
            {orderby}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OrderBy;
