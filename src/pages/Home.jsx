import Banner from "../components/Banner";
import {Outlet, useLoaderData} from "react-router-dom";
import ProductsSection from "../Before/ProductsSection";
import Categories from "../components/Categories";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div className="">
      <Banner categories={categories} />
      <Categories categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
