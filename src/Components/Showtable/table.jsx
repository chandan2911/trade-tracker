import React from "react";

const Table = (props) => {
  const { Data } = props;
  console.log(Data[0]);
  return (
    <div>
      <table>
        <thead>
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
            <tbody key={id}>
              <tr>
                <td>{name}</td>
                <td>{symbol}</td>

                <td>{current_price}</td>
                <td>{market_cap}</td>
                <td>{total_volume}</td>
                <td>
                  {price_change_percentage_24h}{" "}
                  <span> {price_change_percentage_24h > 0 ? "⬆️" : "⬇️"}</span>
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
