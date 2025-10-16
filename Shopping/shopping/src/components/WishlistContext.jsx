import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { user, pendingAction, clearPendingAction } = useAuth();
  const [wishlist, setWishlist] = useState([]);

  // Load user-specific wishlist from localStorage
  useEffect(() => {
    if (user) {
      const saved = localStorage.getItem(`wishlist_${user.email}`);
      setWishlist(saved ? JSON.parse(saved) : []);
    } else {
      setWishlist([]);
    }
  }, [user]);

  // Persist user-specific wishlist
  useEffect(() => {
    if (user) {
      localStorage.setItem(`wishlist_${user.email}`, JSON.stringify(wishlist));
    }
  }, [wishlist, user]);

  // Add product
  const addToWishlist = (product) => {
    setWishlist((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  // Remove product
  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  // Automatically add pending wishlist product after login
  useEffect(() => {
    if (pendingAction && pendingAction.type === "wishlist" && user) {
      addToWishlist(pendingAction.product);
      clearPendingAction();
    }
  }, [pendingAction, user]);

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
