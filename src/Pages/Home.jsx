import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const [Data, setData] = useState([]);
  const [Error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const currency = useSelector((state) => state.currency.value);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) => {
        setisLoading(!isLoading);
        setData(res.data);
      })
      .catch((err) => {
        setisLoading(!isLoading);
        setError(err.message);
      })
      .finally(() => {
        setisLoading(!isLoading);
      });
  }, [currency]);
  return (
    <div className="home">
      {isLoading ? <div>I am Loaded</div> : <div>I am Loading</div>}
      {Error ? <div>{Error}</div> : <div>{Data.length}</div>}
    </div>
  );
};

export default Home;
