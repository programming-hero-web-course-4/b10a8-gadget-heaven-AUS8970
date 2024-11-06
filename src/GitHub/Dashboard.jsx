// src/pages/Dashboard.js
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function Dashboard() {
  const { cart, wishlist } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item) => (
        <p key={item.product_id}>{item.product_title}</p>
      ))}

      <h2>Wishlist</h2>
      {wishlist.map((item) => (
        <p key={item.product_id}>{item.product_title}</p>
      ))}
    </div>
  );
}

export default Dashboard;