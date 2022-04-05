import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Loading from "../loading/Loading";
import Table from "../Showtable/table";

const MainSection = () => {
  const [Data, setData] = useState([]);
  const [Error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const currency = useSelector((state) => state.currency);
  const { value: time } = useSelector((state) => state.time);
  const { value: orderBy } = useSelector((state) => state.orderBy);
  const { value: orderDirection } = useSelector(
    (state) => state.orderDirection
  );
  const { offset, limit } = useSelector((state) => state.page);

  useEffect(() => {
    setisLoading(true);

    axios
      .get("http://localhost:5000/coins/all", {
        headers: {
          currency: currency.uuid,
          time: time,
          orderBy: orderBy,
          orderDirection: orderDirection,
          offset: offset,
          limit: limit,
        },
      })
      .then((res) => {
        setData(res.data);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setisLoading(false);
      });
  }, [time, currency, orderBy, orderDirection, offset, limit]);

  return (
    <div>
      {Error.length > 0 ? (
        <div>{Error}</div>
      ) : isLoading ? (
        <Loading></Loading>
      ) : (
        <Table Data={Data}></Table>
      )}
    </div>
  );
};

export default MainSection;
