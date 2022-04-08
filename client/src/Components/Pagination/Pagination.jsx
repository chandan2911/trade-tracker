import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOffset } from "../../redux/pageSlice";
import "./Pagination.css";
const Pagination = () => {
  const dataLimit = 10000;
  const { offset, limit } = useSelector((state) => state.page);
  const { isDark } = useSelector((state) => state.theme);
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
  const renderPageNumbers = () => {
    let pageNumbers = [];
    if (offset === 1) {
      for (let i = 1; i <= 5; i++) {
        pageNumbers.push(i);
      }
    } else {
      for (let i = offset - 1; i <= offset + 4; i++) {
        pageNumbers.push(i);
      }
    }
    if (offset === total_page) {
      for (let i = offset - 4; i <= offset; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers.map((page) => (
      <button
        className={`page-link${isDark ? "-dark " : ""} ${
          offset === page ? "active" : ""
        }  `}
        onClick={() => goToPage(page)}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className="pagination">
      <span
        className={`page-btn${offset === 1 ? "-disabled" : ""}`}
        onClick={prevPage}
      >
        Prev
      </span>
      <ul className="pagination-list">{renderPageNumbers()}</ul>
      <span
        className={`page-btn${offset === total_page ? "-disabled" : ""}`}
        onClick={nextPage}
      >
        Next
      </span>
    </div>
  );
};

export default Pagination;
