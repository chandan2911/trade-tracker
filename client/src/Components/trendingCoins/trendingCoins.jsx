import React from "react";
import { useSelector } from "react-redux";
import "./trendingCoin.css";
import { useNavigate } from "react-router-dom";
const Trending = (props) => {
  const { symbol, name, iconUrl, change, uuid } = props;
  const { isDark } = useSelector((state) => state.theme);
  const navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={() => {
        navigate(`/${uuid}`);
      }}
    >
      <div
        className={`trending-card ${
          isDark ? " trending-dark-theme" : "trending-light-theme"
        }`}
      >
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
