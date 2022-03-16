import axios from "axios";
import React, { useEffect } from "react";
import Hero from "../Components/HeroSection/Hero";
import MainSection from "../Components/mainSection/MainSection";

const Home = () => {
  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/coin/all");
    console.log(res.data);
  });
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
