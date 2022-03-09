import React from "react";
import { useParams } from "react-router-dom";

const SingleCoinPage = () => {
  const { coin } = useParams();
  return <div>{coin}</div>;
};

export default SingleCoinPage;
