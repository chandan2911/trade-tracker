/* import { useSelector } from "react-redux"; */

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
