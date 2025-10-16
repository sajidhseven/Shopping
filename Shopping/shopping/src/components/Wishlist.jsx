import React, { useEffect } from "react";
import { useWishlist } from "./WishlistContext";
import { useCart } from "./CartContext";
import productsData from "../data"; // ✅ import productsData
import "./Wishlist.css";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  // ✅ Filter wishlist items only if they exist in productsData
  const validWishlist = wishlist.filter((item) =>
    productsData.some((p) => p.id === item.id)
  );

  // ✅ Sync: remove invalid items automatically
  useEffect(() => {
    if (wishlist.length !== validWishlist.length) {
      wishlist.forEach((item) => {
        if (!productsData.some((p) => p.id === item.id)) {
          removeFromWishlist(item.id);
        }
      });
    }
  }, [wishlist, validWishlist, removeFromWishlist]);

  if (validWishlist.length === 0) {
    return <h2 className="empty-msg">Your wishlist is empty ❤️</h2>;
  }

  return (
    <div className="wishlist-page container">
      <h2 className="wishlist-title">My Wishlist</h2>
      <div className="wishlist-grid">
        {validWishlist.map((product) => (
          <div className="card" key={product.id}>
            <div className="image-wrap">
              <img src={product.image} alt={product.title} />
              <button className="quick" onClick={() => addToCart(product)}>
                🛒 Add to Cart
              </button>
            </div>
            <div className="card-body">
              <h3>{product.title}</h3>
              <p className="meta">₹{product.price}</p>
              <button
                className="remove-btn"
                onClick={() => removeFromWishlist(product.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
