import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./HistoryChart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  registerables,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.register(...registerables);
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

  const settingLabels = () => {
    let labelsTime = Data.map((item) => {
      let ts = item.timestamp;
      let currentTime = new Date(ts * 1000);
      if (time === "3h") {
        return currentTime.toLocaleTimeString();
      }
      return currentTime.toLocaleDateString();
    });
    return labelsTime;
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading</div>
      ) : Error.length > 0 ? (
        <div>{Error}</div>
      ) : (
        <div>
          <div className="react-chart">
            <Line
              data={{
                labels: settingLabels(),
                datasets: [
                  {
                    label: "Price",
                    data: Data.map((item) => {
                      return item.price;
                    }),
                    borderColor: "#ff7800",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            ></Line>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryChart;
