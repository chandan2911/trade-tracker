import axios from "axios";
import React, { useEffect, useState } from "react";

const TestRank = () => {
  useEffect(async () => {
    const response = await axios.get({
      url: "https://coinranking1.p.rapidapi.com/coins",
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        tiers: "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "50",
        offset: "0",
      },
      headers: {
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": "cc7d03dc73mshca51e98f1d6749ep1fcd31jsnaaf719e4c786",
      },
    });
    console.log(response.json());
  }, []);

  return <div>TestRank</div>;
};

export default TestRank;
