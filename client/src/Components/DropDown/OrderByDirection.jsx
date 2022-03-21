import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderDirectionsArr } from "../../ExpectedValue";
import { setOrderDirection } from "../../redux/orderDirectionSlice";

const OrderByDirection = () => {
  const handleChange = (od) => {
    dispatch(setOrderDirection(od));
  };
  const { value: orderDirection } = useSelector(
    (state) => state.orderDirection
  );

  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="DirectionDropdown no-select">
      <div
        onClick={() => {
          setToggle(!toggle);
        }}
        className="dropbtn"
      >
        <span>SortBy {orderDirection}</span>
        {toggle ? (
          <i className="fa fa-angle-up"></i>
        ) : (
          <i className="fa fa-angle-down"></i>
        )}
      </div>
      {toggle && (
        <ul className="dropdown-content ">
          {orderDirectionsArr.map((orderby) => (
            <li
              key={orderby}
              onClick={() => {
                handleChange(orderby);
                setToggle(!toggle);
              }}
              className="dropdown-item"
            >
              {orderby}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderByDirection;
