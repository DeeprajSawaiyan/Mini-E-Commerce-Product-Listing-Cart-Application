import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);


  // ACTION: Add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if item is already 
      // in the cart
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        // If it exists, map through and increase the quantity of that specific item
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      // If it is new, add it to the array with a starting quantity of 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Expose the cart and the addToCart function 
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);