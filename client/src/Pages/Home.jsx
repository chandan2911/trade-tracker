import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import OrderBy from "../Components/DropDown/OrderBy";
import OrderByDirection from "../Components/DropDown/OrderByDirection";
import TimePeriod from "../Components/DropDown/TimePeriod";
/* import Hero from "../Components/HeroSection/Hero";
import MainSection from "../Components/mainSection/MainSection"; */

const Home = () => {
  const currency = useSelector((state) => state.currency);
  /* const orderby = useSelector((state) => state.orderBy);
  const OrderDirection = useSelector((state) => state.orderDirection);
  const time = useSelector((state) => state.time);

  console.log(orderby, currency, OrderDirection, time); */
  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/coin/all", {
      headers: {
        currency: currency.uuid,
      },
    });
    //console.log(res.data);
  }, [currency]);

  return (
    <div>
      {/* <Hero></Hero>
      <MainSection></MainSection> */}
      {<OrderBy />}
      {<OrderByDirection />}
      <TimePeriod></TimePeriod>
    </div>
  );
};

export default Home;
