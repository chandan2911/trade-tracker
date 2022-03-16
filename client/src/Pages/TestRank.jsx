import axios from "axios";
import React, { useEffect, useState } from "react";

const TestRank = () => {
  useEffect(() => {
    const apiKey =
      "coinranking615e071644cb3022a9e5ae4d9e64fdb2aa3f68e7afde0ecc";
    const url = "https://api.coinranking.com/v2/coins";
    const queryString = new URLSearchParams({
      "x-access-token": apiKey,
      search: "Bit",
    });

    // Add the API key to the querystring
    axios
      .get(`${url}?${queryString}`, {
        mode: "cors",
      })
      .then((response) => console.log(response));
  }, []);

  return <div>TestRank</div>;
};

export default TestRank;
