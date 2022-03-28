import { useParams } from "react-router-dom";
import HistoryChart from "../../Components/Chart/HistoryChart";
import TimeSelector from "../../Components/selector/TimeSelector";
import SingleCoinDetails from "../../Components/SingleCoinDetails/SingleCoinDetails";
import "./SingleCoinPage.css";
const SingleCoinPage = () => {
  const { coin } = useParams();
  return (
    <div className="coin_page">
      <SingleCoinDetails coin={coin}></SingleCoinDetails>
      <TimeSelector></TimeSelector>
      <HistoryChart coin={coin}></HistoryChart>
    </div>
  );
};

export default SingleCoinPage;
