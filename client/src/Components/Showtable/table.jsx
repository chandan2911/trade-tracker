import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./table.css";
const Table = (props) => {
  let navigate = useNavigate();
  const { Data } = props;
  const { sign: logo } = useSelector((state) => state.currency);
  console.log(logo);

  return (
    <div className="main-table">
      {/*   <table>
        <thead className="main-table-thead">
          <tr>
            <th>name</th>
            <th className="non-mobile">Image</th>
            <th className="non-mobile">symbol</th>
            <th>current_price</th>
            <th className="non-mobile">market_cap</th>
            <th className="non-mobile">total_volume</th>
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
                <td className="non-mobile">
                  <img src={image} alt={name} width={30} />
                </td>
                <td className="non-mobile">{symbol}</td>

                <td>
                  {logo + " "}
                  {current_price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </td>
                <td className="non-mobile">
                  {logo + " "}
                  {market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </td>
                <td className="non-mobile">
                  {total_volume
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </td>
                <td>
                  {Math.abs(price_change_percentage_24h.toFixed(2))}
                  {price_change_percentage_24h > 0 ? (
                    <span className="up-arrow">&#x2197;</span>
                  ) : (
                    <span className="down-arrow">&#x2198;</span>
                  )}
                </td>
              </tr>
            </tbody>
          );
        })}
      </table> */}
    </div>
  );
};

export default Table;
