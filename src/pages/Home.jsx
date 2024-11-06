import Banner from "../components/Banner";
import {Outlet, useLoaderData} from "react-router-dom";
import ProductsSection from "../Before/ProductsSection";
import Categories from "../components/Categories";
import Haeding from "../components/Haeding";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div className="">
      <Helmet>
        <title> Gadget Heaven | Home </title>
      </Helmet>
      <Banner />
      <div className="mt-20 mb-10">
        <Haeding title={"Explore Cutting-Edge Gadgets"}/>
      </div>
      <div className="flex gap-10">
        <div className="w-1/5"><Categories categories={categories} /></div>
        <div className="w-4/5"><Outlet /></div>
      </div>
    </div>
  );
};

export default Home;
