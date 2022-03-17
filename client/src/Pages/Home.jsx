import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Hero from "../Components/HeroSection/Hero";
import MainSection from "../Components/mainSection/MainSection";

const Home = () => {
  const currency = useSelector((state) => state.currency);

  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/coin/all", {
      headers: {
        currency: currency.uuid,
      },
    });
    console.log(res.data);
  }, [currency]);
  return (
    <div>
      {/* <Hero></Hero>
      <MainSection></MainSection> */}
      {
        //coinranking api
      }
    </div>
  );
};

export default Home;
