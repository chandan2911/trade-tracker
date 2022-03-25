import { Link, useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SingleCoinDetails = (props) => {
  const { coin } = props;
  const currency = useSelector((state) => state.currency);
  const { value: time } = useSelector((state) => state.time);
  const [Data, setData] = useState([]);
  const [Error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);

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
        setData(res.data.data.coin);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setisLoading(false);
      });
  }, [time, currency]);
  console.log(Data);
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="coin_details">
          <header>
            <img src={Data?.iconUrl} alt={Data?.name} width={30} />
            <button
              className="coin_details_header"
              onClick={() => {
                window.open(Data?.websiteUrl);
              }}
            >
              {Data?.name}
              <span className="coin_details_rank">{Data?.rank}</span>
            </button>
          </header>
          <div className="coin_details_body">
            <div className="price_detail_body">
              {currency?.sign} {Data?.price}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleCoinDetails;
