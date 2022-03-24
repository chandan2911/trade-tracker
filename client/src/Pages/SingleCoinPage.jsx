import React from "react";
import { useParams } from "react-router-dom";
import HistoryChart from "../Components/Chart/HistoryChart";

const SingleCoinPage = () => {
  const { coin } = useParams();
  return <HistoryChart coin={coin}></HistoryChart>;
};

export default SingleCoinPage;
