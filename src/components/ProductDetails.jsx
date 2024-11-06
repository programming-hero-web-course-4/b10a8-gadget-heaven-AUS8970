import { useLoaderData, useParams } from "react-router-dom";
import Haeding from "./Haeding";
import { Helmet } from "react-helmet-async";
import { CiHeart } from "react-icons/ci";
import Rating from 'react-rating-stars-component';
import { addToCartList, addToWishList } from "../utility/addTOo";

const ProductDetails = () => {
  const {product_id} = useParams();
  const data = useLoaderData();

  const products = data.find((product) => product.product_id === product_id);

  const {product_id : id, product_title, product_image, category, price, description, specification, availability, rating} = products || {}

  const handleAddToCart = (id) => {
    addToCartList(product_id)
  }

  const handleAddToWish = (id) => {
    addToWishList(product_id);
  }

  return (
    <div className="">
      <Helmet>
        <title> {product_title} </title>
      </Helmet>
      <div className="bg-[#9538E2] text-white py-7 pb-36">
        <Haeding title={"Product Details"} subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}/>
      </div>
      <div className="relative -mt-28 z-10 flex flex-col md:flex-row gap-6 w-8/12 bg-white rounded-xl m-auto items-center p-6">
        <div className="w-full md:w-2/5">
          <img className="w-full" src={product_image} alt="" />
        </div>
        <div className="w-full md:w-3/5 flex flex-col gap-3">
          <h1 className="text-3xl font-bold">{product_title}</h1>
          <p className="text-xl font-semibold">Price: ${price}</p>
          <button className={`rounded-full w-fit font-semibold px-6 py-2 ${availability ? 'bg-green-100 text-green-700 border-2 border-green-700': 'bg-red-100 text-red-700 border-2 border-red-700'}`}>{`${availability ? 'In Stock': 'Stocke Nai'}`}</button>
          <p className="text-xl text-gray-600">{description}</p>
          <p className="text-xl font-bold"> Specification: </p>
          <ol className="">
            {specification.map((spec, index) => (
              <li key={index}>{index + 1}. {spec}</li>
            ))}
          </ol>
          <p className="text-xl font-bold"> Rating ⭐ </p>
          <div className="flex items-center gap-3 text-xl">
            <Rating
              count={5}
              value={rating}
              size={34}
              activeColor="#ffd700"
              edit={false}
            />
            <p>{rating}</p>
          </div>
          <div className="flex gap-3">
            <div onClick={()=> handleAddToCart(product_id)} role="button" className="btn btn-ghost flex w-fit bg-[#9538E2] text-white rounded-full">
              <p className="">Add To Card</p>
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
            </div>
            <div onClick={()=> handleAddToWish(product_id)} role="button" className="btn btn-ghost btn-circle border-2 border-gray-300">
              <div className="indicator">
                <CiHeart className="h-5 w-5 font-bold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;