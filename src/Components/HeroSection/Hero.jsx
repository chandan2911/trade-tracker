import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Trending from "../trendingCoins/trendingCoins";

const Hero = () => {
  const [trending, setTrending] = useState([]);
  const [Error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const currency = useSelector((state) => state.currency.value);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=6&page=1&sparkline=false`
      )
      .then((res) => {
        setisLoading(true);
        setTrending(res.data);
      })
      .catch((err) => {
        setisLoading(true);
        setError(err.message);
      })
      .finally(() => {
        setisLoading(false);
      });
  }, []);

  return (
    <div>
      {trending.map((coins) => {
        const { id, symbol, name, image, price_change_percentage_24h } = coins;
        return (
          <Trending
            key={id}
            id={id}
            symbol={symbol}
            name={name}
            image={image}
            price_change_percentage_24h={price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
};

export default Hero;
