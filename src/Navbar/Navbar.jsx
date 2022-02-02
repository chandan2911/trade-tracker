import React from "react";
import "./Navbar.css";
import useFetch from "../useFetch";
const Navbar = () => {
  const { Data, Error, isLoading } = useFetch(
    "https://api.coingecko.com/api/v3/simple/supported_vs_currencies1"
  );
  console.log(Data,Error,isLoading);
  return <div>I am navbar</div>;
};

export default Navbar;
