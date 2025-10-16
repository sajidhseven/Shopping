import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import productsData from "./data";
import { CartProvider } from "./components/CartContext";
import { WishlistProvider } from "./components/WishlistContext";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login"; 
import Register from "./components/Register"; 
import "./styles.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // ✅ Product filtering by category & search
  const filtered = productsData
    .filter((p) =>
      activeCategory === "all" ? true : p.category.toLowerCase() === activeCategory
    )
    .filter((p) =>
      query.trim()
        ? p.title.toLowerCase().includes(query.toLowerCase())
        : true
    )
    .sort((a, b) => b.popularity - a.popularity);

  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <div className="app">
              <Navbar
                query={query}
                setQuery={setQuery}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />

              <Routes>
                {/* Home */}
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <main className="container">
                        <ProductGrid products={filtered} />
                      </main>
                    </>
                  }
                />

                {/* Cart & Wishlist */}
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />

                {/* Auth */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>

              <Footer />
            </div>
          </Router>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}
// ✅ Persist cart/wishlist per user
// ✅ Add to cart/wishlist with login check
// ✅ Automatically add pending cart product after login
// ✅ Store product user tried to add before login
// ✅ Clear pending action after performing it
// ✅ Register, Login, Logout clears session
// ✅ Show cart/wishlist count in navbar