import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./table.css";
const Table = (props) => {
  let navigate = useNavigate();
  const { Data } = props;
  const { symbol: logo } = useSelector((state) => state.currency);
  console.log(logo);

  return (
    <div className="main-table">
      <table>
        <thead className="main-table-thead">
          <tr>
            <th>name</th>
            <th>symbol</th>
            <th>current_price</th>
            <th>market_cap</th>
            <th>total_volume</th>
            <th>gain</th>
          </tr>
        </thead>
        {Data.map((item) => {
          const {
            id,
            symbol,
            name,
            image,
            current_price,
            market_cap,
            total_volume,
            price_change_percentage_24h,
          } = item;

          return (
            <tbody
              className="main-table-tbody"
              key={id}
              onClick={() => {
                navigate(`/${id}`);
              }}
            >
              <tr>
                <td>{name}</td>
                <td>{symbol}</td>

                <td>
                  {logo+ " "}
                  {current_price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </td>
                <td>
                {logo+ " "}
                  {market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </td>
                <td>
                  {total_volume
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </td>
                <td>
                  {Math.abs(price_change_percentage_24h.toFixed(2))}
                  <span> {price_change_percentage_24h > 0 ? "" : "⬇"}</span>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
