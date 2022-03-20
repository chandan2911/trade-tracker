import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { orderByArr } from "../../ExpectedValue";
import { setOrderBy } from "../../redux/orderBySlice";

const OrderBy = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const handleChange = (orderBy) => {
    dispatch(setOrderBy(orderBy));
  };

  return (
    <div className="OrderByDropdown no-select">
      <div
        onClick={() => {
          setToggle(!toggle);
        }}
        className="dropbtn"
      >
        <span>Order-by</span>
        {toggle ? (
          <i class="fa fa-angle-up"></i>
        ) : (
          <i class="fa fa-angle-down"></i>
        )}
      </div>
      {toggle && (
        <ul className="dropdown-content ">
          {orderByArr.map((orderby) => (
            <li
              key={orderby}
              onClick={() => {
                handleChange(orderby);
                setToggle(!toggle);
              }}
              className="dropdown-item"
            >
              {orderby === "24hVolume change" ? "24h Volume" : orderby}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderBy;
