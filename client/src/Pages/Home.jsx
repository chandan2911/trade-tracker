import axios from "axios";
/* import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import OrderBy from "../Components/DropDown/OrderBy";
import OrderByDirection from "../Components/DropDown/OrderByDirection";
import TimePeriod from "../Components/DropDown/TimePeriod";
*/
import Hero from "../Components/HeroSection/Hero";
//import TimeSelector from "../Components/selector/TimeSelector";
import MainSection from "../Components/mainSection/MainSection";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <MainSection></MainSection>

      {/* 
      <OrderBy />
      <OrderByDirection />
      <TimePeriod></TimePeriod>
    <TimeSelector /> */}
    </div>
  );
};

export default Home;
