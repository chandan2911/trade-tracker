import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import SingleCoinPage from "./Pages/CoinPage/SingleCoinPage";

function App() {
  const isDark = useSelector((state) => state.theme.isDark);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className={`App ${isDark ? "dark-theme" : "light-theme"}`}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:coin" element={<SingleCoinPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
