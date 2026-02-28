import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  //  Read from localStorage on initial load
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('mycart_data');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  //  Saves to localStorage 
  useEffect(() => {
    localStorage.setItem('mycart_data', JSON.stringify(cart));
  }, [cart]);
 
  
// ADD TO CART
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

// DELETE FROM CART
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

 // UPADTE THE CART
  const updateQuantity = (productId, amount) => {
    setCart(prevCart => prevCart.map(item => {
      if (item.id === productId) {
        const newQty = item.quantity + amount;
        return { ...item, quantity: newQty > 0 ? newQty : 1 };
      }
      return item;
    }));
  };

// CALCULATE TOTALS
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ 
      cart, addToCart, removeFromCart, updateQuantity, totalItems, totalPrice 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);