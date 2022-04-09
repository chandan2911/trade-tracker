import React from "react";
import "./Filter.css";
import OrderBy from "../DropDown/OrderBy";
import TimePeriod from "../DropDown/TimePeriod";
import OrderbyDirection from "../DropDown/OrderByDirection";
import PageDropdown from "../DropDown/PageDropdown";
const Filter = () => {
  return (
    <div className="filter_section">
      <OrderBy></OrderBy>
      <TimePeriod></TimePeriod>
      <OrderbyDirection></OrderbyDirection>
      <PageDropdown></PageDropdown>
    </div>
  );
};

export default Filter;
