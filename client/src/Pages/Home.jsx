import Filter from "../Components/FilterComponent/Filter";
import Hero from "../Components/HeroSection/Hero";

import MainSection from "../Components/mainSection/MainSection";
import Pagination from "../Components/Pagination/Pagination";

const Home = () => {
  return (
    <div className="home_page">
      <Hero></Hero>
      <Filter></Filter>
      <MainSection></MainSection>
      <Pagination></Pagination>
    </div>
  );
};

export default Home;
