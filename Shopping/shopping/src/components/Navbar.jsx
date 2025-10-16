import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";
import { useNavigate } from "react-router-dom";
import productsData from "../data";
import { useAuth } from "../context/AuthContext";

export default function Navbar({
  query,
  setQuery,
  activeCategory,
  setActiveCategory,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const categories = [
    "all",
    ...Array.from(new Set(productsData.map((p) => p.category.toLowerCase()))),
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const handleSelectCategory = (cat) => {
    setActiveCategory(cat.toLowerCase());
    setMenuOpen(false);
    navigate("/");
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
      setMenuOpen(false);
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-inner container">
        {/* Brand / Logo */}
        <div
          className={`logo ${activeCategory === "all" ? "active" : ""}`}
          onClick={() => handleSelectCategory("all")}
          style={{ cursor: "pointer" }}
        >
          STORE
        </div>

        {/* Desktop categories */}
        <div className="categories desktop-only">
          {categories
            .filter((c) => c !== "all")
            .map((cat) => (
              <button
                key={cat}
                className={`cat-btn ${
                  activeCategory === cat ? "active" : ""
                }`}
                onClick={() => handleSelectCategory(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
        </div>

        {/* Desktop search */}
        <div className="search desktop-only">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
          />
        </div>

        {/* Desktop actions */}
        <div className="nav-actions desktop-only">
          <button className="icon-btn" onClick={() => navigate("/wishlist")}>
            ♡ Wishlist (
            {wishlist.filter((w) => productsData.some((p) => p.id === w.id))
              .length}
            )
          </button>
          <button className="primary" onClick={() => navigate("/cart")}>
            🛒 Cart (
            {cart.filter((c) => productsData.some((p) => p.id === c.id)).length}
            )
          </button>

          {user ? (
            <>
              <span className="user-email">{user.email}</span>
              <button className="secondary" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="login" onClick={() => navigate("/login")}>Login</button>
              <button className="register" onClick={() => navigate("/register")}>Register</button>
            </>
          )}
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="hamburger mobile-only"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`mobile-menu-fullscreen ${menuOpen ? "show" : ""}`}
      >
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </button>

        <div className="mobile-menu-inner">
          {/* Mobile categories */}
          <div className="mobile-categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`cat-btn ${
                  activeCategory === cat ? "active" : ""
                }`}
                onClick={() => handleSelectCategory(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Mobile actions */}
          <div className="mobile-actions">
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/wishlist");
              }}
            >
              ♡ Wishlist (
              {wishlist.filter((w) =>
                productsData.some((p) => p.id === w.id)
              ).length}
              )
            </button>
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/cart");
              }}
            >
              🛒 Cart (
              {cart.filter((c) => productsData.some((p) => p.id === c.id))
                .length}
              )
            </button>

            {user ? (
              <>
                <span className="user-email">{user.email}</span>
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/login");
                  }}
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/register");
                  }}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
