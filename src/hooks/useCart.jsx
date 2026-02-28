import React, { createContext, useContext, useState } from 'react';

//  Created the Context
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  //  Setup basic empty cart state
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart }}>
      {children}
    </CartContext.Provider>
  );
};

//  Export custom hook
export const useCart = () => useContext(CartContext);