import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Banner from "./components/Banner";
import Categories from "./components/Categories";

const HomePage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <Banner />
      <Categories />
      <Footer />
    </div>
  );
};

export default HomePage;
