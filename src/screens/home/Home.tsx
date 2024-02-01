import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Banner from "./components/Banner";
import Categories from "./components/Categories";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <Banner />
      <Categories />
      <Footer />
    </div>
  );
};

export default Home;
