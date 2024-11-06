import { useState } from "react";
import Haeding from "../components/Haeding";
// import Sidebar from "./Sideber";
// import Products from "./Products";
import ProductsData from '../../public/products.json';
import Product from './Product';
import { Link } from "react-router-dom";

const categories = [
  "All Products",
  "Laptops",
  "Phones",
  "Accessories",
  "Smart Watches",
  "MacBooks",
  "iPhones",
];

const ProductsSection = () => {
  const [category, setCategory] = useState("all");

  function handleSelect(category) {
    if (category === "All Products") setCategory("all");
    onSelect(category.toLowerCase());
  }

  function getProducts(){
    if(category === "all"){
      return ProductsData;
    } else {
      return ProductsData.filter(
        (product) => product.category === category
      );
    }
  }
  const products = getProducts();

  return (
    <div>
      <div className="mt-5">
        <Haeding title={"Explore Cutting-Edge Gadgets"}/>
      </div>
      <div className="w-full">
        <div className="w-1/5 bg-gray-200 rounded-xl p-4">
          {/* {categories.map(category => {
            <button onClick={()=> handleSelect(category)}>
              {category}
            </button>
          })} */}
          {/* <div className="w-1/5 "> */}
            {categories.map(category => (
              <Link
                // key={category.category}
                to={`/category/${category}`}
                className="flex flex-col mb-4 bg-red-200 p-3 rounded-xl "
              >{category}</Link>
            ))}
          {/* </div> */}
        </div>
        {/* <Sidebar category={category} onSelect={setCategory} /> */}
        {/* <Products category={category} /> */}
        <div className="w-4/5">
          {
            products.map((product) => {
              <Product product={product} key={product.product_id}></Product>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;