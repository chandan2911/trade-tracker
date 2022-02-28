import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const [Data, setData] = useState([]);
  const { currency } = useSelector((state) => state.currency);
  useEffect(() => {}, []);
  return <div className="home">Hello</div>;
};

export default Home;
