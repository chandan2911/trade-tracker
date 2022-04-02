import React from "react";
import "./Filter.css";
import OrderBy from "../DropDown/OrderBy";
import TimePeriod from "../DropDown/TimePeriod";
import OrderbyDirection from "../DropDown/OrderByDirection";
const Filter = () => {
  return (
    <div className="filter_section">
      <OrderBy></OrderBy>
      <TimePeriod></TimePeriod>
      <OrderbyDirection></OrderbyDirection>
    </div>
  );
};

export default Filter;
