import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../Components/loading/Loading";
import Table from "../Components/Showtable/table";

const Home = () => {
  const [Data, setData] = useState([]);
  const [Error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const currency = useSelector((state) => state.currency.value);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=200&page=1&sparkline=false`
      )
      .then((res) => {
        setisLoading(true);
        setData(res.data);
      })
      .catch((err) => {
        setisLoading(true);
        setError(err.message);
      })
      .finally(() => {
        setisLoading(false);
      });
  }, [currency]);

  return (
    <div className="home">
      {isLoading ? <Loading></Loading> : <Table Data={Data}></Table>}

      {Error ? <div>{Error}</div> : <div>{Data.length}</div>}
    </div>
  );
};

export default Home;
