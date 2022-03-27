import { Link, useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SingleCoinDetails = (props) => {
  const { coin } = props;
  const currency = useSelector((state) => state.currency);
  const { value: time } = useSelector((state) => state.time);

  const [Error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [Data, setData] = useState({
    name: "",
    symbol: "",
    price: "",
    iconUrl: "",
    websiteUrl: "",
    rank: "",
    change: "",
    marketCap: "",
    description: "",
  });
  const MinimalNumber = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(2) + "B";
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(2) + "K";
    } else {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  };
  useEffect(async () => {
    setisLoading(true);
    await axios
      .get("/coin/single/", {
        headers: {
          currency: currency.uuid,
          time: time,
          uuid: coin,
        },
      })
      .then((res) => {
        let data = res.data.data.coin;
        setData({
          name: data.name,
          symbol: data.symbol,
          price: data.price,
          iconUrl: data.iconUrl,
          websiteUrl: data.websiteUrl,
          rank: data.rank,
          change: data.change,
          marketCap: data.marketCap,
          description: data.description,
        });
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setisLoading(false);
      });
  }, [time, currency]);
  const removeTags = (str) => {
    return str.replace(/<\/?[^>]+(>|$)/g, "");
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : Error.length > 0 ? (
        <div>{Error}</div>
      ) : (
        Data && (
          <div className="coin_details">
            <header>
              <img src={Data?.iconUrl} alt={Data?.name} width={30} />
              <h1
                className="coin_details_header"
                onClick={() => {
                  window.open(Data?.websiteUrl);
                }}
              >
                {Data?.name}
                <span className="coin_details_rank">{Data?.rank}</span>
              </h1>
            </header>
            <div className="coin_details_body">
              <div className="coin_detail_left">
                <span className="coin_price">
                  Price:
                  <span>{MinimalNumber(Data?.price)}</span>
                </span>
                {/* <span className="coin_rank">
                  Rank:
                  <span>{Data?.rank}</span>
                </span> */}
                <span className="coin_change">
                  Change:
                  <span>{Data?.change}</span>
                </span>
                <span className="coin_market_cap">
                  Market Cap:
                  <span>{MinimalNumber(Data?.marketCap)}</span>
                </span>
              </div>
              <div className="coin_detail_right">
                <span className="coin_bio">
                  Bio:
                  <span>{removeTags(Data?.description)}</span>
                </span>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default SingleCoinDetails;
