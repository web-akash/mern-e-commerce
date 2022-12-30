import Advertisment from "../components/layout/Advertisment";
import Banner from "../components/layout/Banner";
import BannerService from "../components/layout/BannerService";
import Bestseller from "../components/layout/Bestseller";
import Footer from "../components/layout/Footer";
import Middeladd from "../components/layout/Middeladd";
import NewArrivals from "../components/layout/NewArrivals";
import SpacialOffer from "../components/layout/SpacialOffer";

const Home = () => {
  return (
    <>
      <Banner />
      <BannerService />
      <Advertisment />
      <NewArrivals />
      <Bestseller />
      <Middeladd />
      <SpacialOffer />
    </>
  );
};
export default Home;
