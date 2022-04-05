import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOffset } from "../../redux/pageSlice";
import "./Pagination.css";
const Pagination = () => {
  const dataLimit = 10000;
  const { offset, limit } = useSelector((state) => state.page);
  console.log(offset, limit);
  const total_page = Math.ceil(dataLimit / limit);
  const dispatch = useDispatch();
  const prevPage = () => {
    if (offset > 1) {
      dispatch(setOffset(offset - 1));
    }
  };
  const nextPage = () => {
    if (offset < total_page) {
      dispatch(setOffset(offset + 1));
    }
  };
  const goToPage = (page) => {
    dispatch(setOffset(page));
  };

  return <div className="pagination"></div>;
};

export default Pagination;
