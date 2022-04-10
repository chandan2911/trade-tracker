import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../loading/Loading";
import Trending from "../trendingCoins/trendingCoins";
import "./Hero.css";
const Hero = () => {
  const [Data, setData] = useState([]);
  const [Error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const { value: time } = useSelector((state) => state.time);
  const { value: orderBy } = useSelector((state) => state.orderBy);
  const { value: orderDirection } = useSelector(
    (state) => state.orderDirection
  );

  useEffect(() => {
    setisLoading(true);

    axios
      .get("/coins/trending", {
        headers: {
          time: time,
          orderBy: orderBy,
          orderDirection: orderDirection,
          offset: 0,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setisLoading(false);
      });
  }, [time, orderBy, orderDirection]);

  return (
    <>
      {isLoading ? (
        <Loading></Loading>
      ) : Error.length > 0 ? (
        <div>{Error}</div>
      ) : (
        <div className="hero-section">
          <div className="hero-trending-section ">
            {Data?.map((coins) => {
              const { uuid, symbol, name, iconUrl, change } = coins;
              return (
                <Trending
                  key={uuid}
                  uuid={uuid}
                  symbol={symbol}
                  name={name}
                  iconUrl={iconUrl}
                  change={change}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
