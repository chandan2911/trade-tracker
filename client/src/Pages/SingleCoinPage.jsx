import { useParams } from "react-router-dom";
import HistoryChart from "../Components/Chart/HistoryChart";
import SingleCoinDetails from "../Components/SingleCoinDetails/SingleCoinDetails";

const SingleCoinPage = () => {
  const { coin } = useParams();
  return (
    <div className="coin_page">
      <SingleCoinDetails coin={coin}></SingleCoinDetails>
      <HistoryChart coin={coin}></HistoryChart>
    </div>
  );
};

export default SingleCoinPage;
