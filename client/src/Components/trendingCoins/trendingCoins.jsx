import React from "react";
import "./trendingCoin.css";
const Trending = (props) => {
  const { uuid, symbol, name, iconUrl, change } = props;
  console.log(iconUrl);
  return (
    <div className="card">
      <div className="trending-card">
        <div className="trending-card-image">
          <img src={iconUrl} alt={name} width={100} />
        </div>
        <div className="trending-card-content">
          <p className="coin-name">{name}</p>
          <p className="">{symbol}</p>
          <p>
            {Math.abs(change)}
            {change > 0 ? (
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
