import HomeMain from "./components/HomeMain";
import HomeServices from "./components/HomeServices";

const Home = () => {
  return (
    <div className="px-5 lg:px-[100px]">
      <div className="mt-[40px] lg:mt-[70px]">
        <HomeMain />
      </div>
      <div className="mt-[60px] lg:mt-[140px] mb-[70px] lg:mb-[120px]">
        <HomeServices />
      </div>
    </div>
  );
};

export default Home;
