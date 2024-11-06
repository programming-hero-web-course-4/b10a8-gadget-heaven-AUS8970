import React from 'react';

const Card = () => {
  const {product_id, product_title, product_image, category, price, description, specification, availability, rating} = product || {}
  return (
    <div>
      {product_title}
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