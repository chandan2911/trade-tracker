import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const HistoryChart = (props) => {
  const { coin } = props;
  const currency = useSelector((state) => state.currency);
  const { value: time } = useSelector((state) => state.time);
  const [Data, setData] = useState([]);
  const [Error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);

  useEffect(async () => {
    setisLoading(true);
    await axios
      .get("/coin/single/histroy", {
        headers: {
          currency: currency.uuid,
          time: time,
          uuid: coin,
        },
      })
      .then((res) => {
        setData(res.data.data.history);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setisLoading(false);
      });
  }, [time, currency]);

  ///seting the chart
  const settingLabels = () => {
    let labelsTime = Data.map((item) => {
      let date = new Date(item.timestamp);
      let currentTime = "";
      if (time === "3h") {
        currentTime =
          date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      } else {
        currentTime =
          date.getDate() +
          "/" +
          date.getMonth() +
          "/" +
          date.getFullYear() +
          " " +
          date.getHours() +
          ":" +
          date.getMinutes();
      }
      return currentTime;
    });
    return labelsTime;
  };
  let labels = settingLabels();
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => Data.price({ min: 0, max: 1000 }).toFixed(2)),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div>
      {isLoading ? (
        <div>Loading</div>
      ) : Error.length > 0 ? (
        <div>{Error}</div>
      ) : (
        <div>
          <div>{Data?.length}</div>
        </div>
      )}
    </div>
  );
};

export default HistoryChart;
