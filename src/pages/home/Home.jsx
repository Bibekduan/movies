import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Populer from "./populer/Populer";
import TopRated from "./topRated/TopRated";

HeroBanner;
const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending/>
      <Populer/>
      <TopRated/>
    </div>
  );
};

export default Home;
