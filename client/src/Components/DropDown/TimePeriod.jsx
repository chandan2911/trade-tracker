import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { timePeriodArr } from "../../ExpectedValue";
import { setTime } from "../../redux/timeSlice";
const TimePeriod = () => {
  const dispatch = useDispatch();

  return (
    <div className="dropdown">
      <select
        onChange={(e) => {
          dispatch(setTime(e.target.value));
        }}
      >
        {timePeriodArr.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimePeriod;
