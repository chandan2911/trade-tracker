import axios from "axios";
import React, { useState } from "react";

const SearchData = () => {
  const [search, setSearch] = useState("");
  const handleSubmit = (search) => {};
  return (
    <div>
      <label>Search Data</label>
      <input
        type="text"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <button
        onClick={() => {
          handleSubmit(search);
          setSearch("");
        }}
      ></button>
    </div>
  );
};

export default SearchData;
