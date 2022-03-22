import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { timePeriodArr } from "../../ExpectedValue";
import { setTime } from "../../redux/timeSlice";
import "./timeSelector.css";

const TimeSelector = () => {
  const [Selected, setSelected] = useState(timePeriodArr[0]);
  const dispatch = useDispatch();

  return (
    <div className="time_selector">
      {timePeriodArr.map((time) => (
        <span
          key={time}
          className={`time_selector_btn ${Selected === time ? "selected" : ""}`}
          onClick={() => {
            setSelected(time);
            dispatch(setTime(time));
          }}
        >
          {time}
        </span>
      ))}
    </div>
  );
};

export default TimeSelector;
