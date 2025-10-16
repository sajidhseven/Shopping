import React, { createContext, useContext, useState, useEffect } from "react";
import products from "../data";
import { useAuth } from "../context/AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user, pendingAction, clearPendingAction } = useAuth();
  const [cart, setCart] = useState([]);

  // Load user-specific cart from localStorage
  useEffect(() => {
    if (user) {
      const saved = localStorage.getItem(`cart_${user.email}`);
      setCart(saved ? JSON.parse(saved) : []);
    } else {
      setCart([]);
    }
  }, [user]);

  // Persist user-specific cart
  useEffect(() => {
    if (user) {
      localStorage.setItem(`cart_${user.email}`, JSON.stringify(cart));
    }
  }, [cart, user]);

  // Sync with products list
  useEffect(() => {
    setCart((prev) => prev.filter((item) =>
      products.some((p) => p.id === item.id)
    ));
  }, [products]);

  // ✅ Add to cart
  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [...prev, { ...product, qty }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id, qty) => {
    if (qty < 1) return;
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  // ✅ Automatically add pending cart product after login
  useEffect(() => {
    if (pendingAction && pendingAction.type === "cart" && user) {
      addToCart(pendingAction.product);
      clearPendingAction();
    }
  }, [pendingAction, user]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
