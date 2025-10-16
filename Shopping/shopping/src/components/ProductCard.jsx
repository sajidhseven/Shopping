import React from "react";
import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";
import productsData from "../data";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, onQuickView }) {
  const { addToCart } = useCart();
  const { addToWishlist, wishlist, removeFromWishlist } = useWishlist();
  const { user, setPendingProductAction } = useAuth();
  const navigate = useNavigate();

  // Check if product exists in data.js
  const existsInData = productsData.some((p) => p.id === product.id);
  if (!existsInData) return null;

  const discount =
    product.actualPrice && product.actualPrice > product.price
      ? Math.round(
          ((product.actualPrice - product.price) / product.actualPrice) * 100
        )
      : null;

  const isInWishlist = wishlist.some((item) => item.id === product.id);

  // ✅ Add to Cart with login check
  const handleAddToCart = () => {
    if (!user) {
      setPendingProductAction({ type: "cart", product });
      navigate("/login");
    } else {
      addToCart(product, 1);
    }
  };

  // ✅ Add to Wishlist with login check
  const handleWishlistToggle = () => {
    if (!user) {
      setPendingProductAction({ type: "wishlist", product });
      navigate("/login");
    } else {
      isInWishlist ? removeFromWishlist(product.id) : addToWishlist(product);
    }
  };

  return (
    <article className="card">
      <div className="image-wrap">
        <img
          src={product.image}
          onClick={onQuickView}
          alt={product.title}
        />

        {/* ❤️ Wishlist button top-right */}
        <button
          className={`wishlist-btn ${isInWishlist ? "active" : ""}`}
          onClick={handleWishlistToggle}
        >
          {isInWishlist ? "♥" : "♡"}
        </button>
      </div>

      <div className="card-body">
        <h3>{product.title}</h3>
        <h2 className="meta">{product.color}</h2>

        <div className="card-footer">
          <div className="price-info">
            <span className="price">₹{product.price}</span>
            {product.actualPrice && (
              <span className="actual-price">₹{product.actualPrice}</span>
            )}
            {discount && <span className="discount">({discount}% OFF)</span>}
          </div>

          <div style={{ display: "flex", gap: "6px" }}>
            <button className="add" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
