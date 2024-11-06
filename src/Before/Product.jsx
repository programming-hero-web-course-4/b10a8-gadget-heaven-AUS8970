import { Link } from "react-router-dom";

const Product = ({product}) => (
  <div>
    <img src={product.product_image} alt={product.product_title} />
    <h3>{product.product_title}</h3>
    <p>Price: ${product.price}</p>
    <Link to={`/details/${product.product_id}`}>View Details</Link>
  </div>
);

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

export default Product;