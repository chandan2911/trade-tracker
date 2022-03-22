import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { timePeriodArr } from "../../ExpectedValue";
import { setTime } from "../../redux/timeSlice";
const TimePeriod = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const handleOnChange = (timePeriod) => {
    dispatch(setTime(timePeriod));
  };
  const { value } = useSelector((state) => state.time);

  return (
    <div className="dropdown">
      <div
        onClick={() => {
          setToggle(!toggle);
        }}
        className="dropbtn"
      >
        <span>Time:{value}</span>
        {toggle ? (
          <i className="fa fa-angle-up"></i>
        ) : (
          <i className="fa fa-angle-down"></i>
        )}
      </div>
      {toggle && (
        <ul className="dropdown-content">
          {timePeriodArr.map((time) => (
            <li
              key={time}
              onClick={() => {
                handleOnChange(time);
                setToggle(!toggle);
              }}
              className="dropdown-item"
            >
              {time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TimePeriod;
