import axios from "axios";
import React, { useEffect, useState } from "react";
import "./SingleCoinDetails.css";
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
    if (num === null) return 0;
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(2) + "B";
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(2) + "K";
    } else {
      return parseInt(num);
    }
  };
  useEffect(async () => {
    setisLoading(true);
    await axios
      .get("http://localhost:5000/coin/single/", {
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
  }, [currency]);
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
            <div className="coin_details_header">
              <header>
                <img src={Data?.iconUrl} alt={Data?.name} />
                <span
                  className="coin_details_header"
                  onClick={() => {
                    window.open(Data?.websiteUrl);
                  }}
                >
                  {Data?.name}
                </span>
                <span className="coin_details_rank">Rank:{Data?.rank}</span>
              </header>
              <div className="coin_detail_left">
                <span className="coin_price">
                  Price:
                  {MinimalNumber(Data?.price)}
                </span>

                <span className="coin_change">
                  Change:
                  <span>
                    {Math.abs(Data?.change)}
                    {Data?.change > 0 ? (
                      <span className="up-arrow">&#x2197;</span>
                    ) : (
                      <span className="down-arrow">&#x2198;</span>
                    )}
                  </span>
                </span>
                <span className="coin_market_cap">
                  Market Cap:
                  {MinimalNumber(Data?.marketCap)}
                </span>
              </div>
            </div>
            <div className="coin_details_body">
              <div className="coin_detail_right">
                <span className="coin_bio">
                  {removeTags(Data?.description)}
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
