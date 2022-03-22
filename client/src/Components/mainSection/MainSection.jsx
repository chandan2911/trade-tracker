import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OrderByDirection from "../DropDown/OrderByDirection";
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

  useEffect(() => {
    axios
      .get("http://localhost:5000/coins/all", {
        headers: {
          currency: currency.uuid,
          time: time,
          orderBy: orderBy,
          orderDirection: orderDirection,
          offset: 0,
        },
      })
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
  }, [time, currency, orderBy, orderDirection]);

  return (
    <div>
      <OrderByDirection />
      {isLoading ? <Loading></Loading> : <Table Data={Data}></Table>}
      {Error ? <div>{Error}</div> : <div>{Data.length}</div>}
    </div>
  );
};

export default MainSection;
