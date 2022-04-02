import Filter from "../Components/FilterComponent/Filter";
import Hero from "../Components/HeroSection/Hero";

import MainSection from "../Components/mainSection/MainSection";

const Home = () => {
  return (
    <div className="home_page">
      <Hero></Hero>
      <Filter></Filter>
      <MainSection></MainSection>
    </div>
  );
};

export default Home;
