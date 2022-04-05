import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLimit } from "../../redux/pageSlice";

const PageDropdown = () => {
  const [toggle, setToggle] = useState(false);
  const { limit } = useSelector((state) => state.page);

  const dispatch = useDispatch();
  const handleChange = (value) => {
    dispatch(setLimit(value));
  };

  return (
    <div className="OrderByDropdown no-select">
      <div
        onClick={() => {
          setToggle(!toggle);
        }}
        className="dropbtn"
      >
        <span>{limit}/per page</span>
        {toggle ? (
          <i className="fa fa-angle-up"></i>
        ) : (
          <i className="fa fa-angle-down"></i>
        )}
      </div>
      {toggle && (
        <ul className="dropdown-content ">
          {[10, 20, 50, 100].map((value) => (
            <li
              key={value}
              onClick={() => {
                handleChange(value);
                setToggle(!toggle);
              }}
              className="dropdown-item"
            >
              {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PageDropdown;
