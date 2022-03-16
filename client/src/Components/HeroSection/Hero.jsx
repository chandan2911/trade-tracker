import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Trending from "../trendingCoins/trendingCoins";
import "./Hero.css";
const Hero = () => {
  const [trending, setTrending] = useState([]);
  const [Error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const { name } = useSelector((state) => state.currency);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${name}&order=market_cap_desc&per_page=6&page=1&sparkline=false`
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
  }, [name]);
  console.log(trending);
  return (
    <div className="hero-section">
      <div className="hero-trending-section">
        {isLoading ||
          trending.map((coins) => {
            const { id, symbol, name, image, price_change_percentage_24h } =
              coins;
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
      <div className="hero-art"></div>
    </div>
  );
};

export default Hero;
