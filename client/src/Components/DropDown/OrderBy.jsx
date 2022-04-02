import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderByArr } from "../../ExpectedValue";
import { setOrderBy } from "../../redux/orderBySlice";

const OrderBy = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const { value } = useSelector((state) => state.orderBy);
  console.log(value);
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
        <span>{value}</span>
        {toggle ? (
          <i className="fa fa-angle-up"></i>
        ) : (
          <i className="fa fa-angle-down"></i>
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
              {orderby}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderBy;
