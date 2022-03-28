import { useParams } from "react-router-dom";
import HistoryChart from "../Components/Chart/HistoryChart";
import TimeSelector from "../Components/selector/TimeSelector";
import SingleCoinDetails from "../Components/SingleCoinDetails/SingleCoinDetails";

const SingleCoinPage = () => {
  const { coin } = useParams();
  return (
    <div className="coin_page">
      <SingleCoinDetails coin={coin}></SingleCoinDetails>
      <HistoryChart coin={coin}></HistoryChart>
      <TimeSelector></TimeSelector>
    </div>
  );
};

export default SingleCoinPage;
