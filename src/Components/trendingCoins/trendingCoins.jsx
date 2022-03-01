import React from "react";
import "./trendingCoin.css";
const Trending = ({ id, name, image, symbol, price_change_percentage_24h }) => {
  return (
    <div className="card">
      <div className="trending-card">
        <div className="trending-card-image">
          <img src={image} alt={name} width={100} />

          <div className="trending-card-content">
            <p>{name}</p>
            <p>{symbol}</p>
            <p>{price_change_percentage_24h}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
