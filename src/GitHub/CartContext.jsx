import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (item) => setCart([...cart, item]);
  const addToWishlist = (item) => setWishlist([...wishlist, item]);

  return (
    <CartContext.Provider value={{ cart, addToCart, wishlist, addToWishlist }}>
      {children}
    </CartContext.Provider>
  );
};
