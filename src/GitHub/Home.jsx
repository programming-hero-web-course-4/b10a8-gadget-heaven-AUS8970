// src/pages/Home.js
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import products from '../data/products.json';

function Home() {
  const { addToCart, addToWishlist } = useContext(CartContext);

  return (
    <div>
      <h1>GadgetHeaven</h1>
      {products.map((product) => (
        <div key={product.product_id}>
          <img src={product.product_image} alt={product.product_title} />
          <h3>{product.product_title}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
        </div>
      ))}
    </div>
  );
}

export default Home;