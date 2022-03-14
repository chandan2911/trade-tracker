import React from "react";
import "./trendingCoin.css";
const Trending = ({ id, name, image, symbol, price_change_percentage_24h }) => {
  return (
    <div className="card">
      <div className="trending-card">
        <div className="trending-card-image">
          <img src={image} alt={name} width={100} />
        </div>
        <div className="trending-card-content">
          <p className="coin-name">{name}</p>
          <p className="">{symbol}</p>
          <p>
            {Math.abs(price_change_percentage_24h.toFixed(2))}
            {price_change_percentage_24h > 0 ? (
              <span className="up-arrow">&#x2197;</span>
            ) : (
              <span className="down-arrow">&#x2198;</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trending;
