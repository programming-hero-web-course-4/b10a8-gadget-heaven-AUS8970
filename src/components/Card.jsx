import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({product}) => {
  const {product_id, product_title, product_image, category, price, description, specification, availability, rating} = product || {}
  return (
    <div className='p-6 rounded-xl bg-white flex flex-col gap-4'>
      <img className='rounded-xl w-full h-64' src={product_image} alt="" />
      <h2 className="text-2xl font-semibold">{product_title}</h2>
      <p className="text-xl text-gray-600 font-semibold">Price: {price}k </p>
      <Link to={`product/${product_id}`}>
        <button className="btn text-[#9538E2] border-2 border-[#9538E2] rounded-full bg-white text-xl font-semibold"> View Details </button>
      </Link>
    </div>
  );
};

// {
//   "product_id": "LAP001",
//   "product_title": "Dell XPS 13",
//   "product_image": "https://i.ibb.co.com/rM628Vs/Dell-XPS-13.jpg",
//   "category": "Laptops",
//   "price": 1200,
//   "description": "13-inch laptop with an InfinityEdge display, sleek design, and powerful performance.",
//   "specification": [
//     "Intel i7",
//     "16GB RAM",
//     "512GB SSD",
//     "13.3-inch FHD Display"
//   ],
//   "availability": true,
//   "rating": 4.8
// },

export default Card;