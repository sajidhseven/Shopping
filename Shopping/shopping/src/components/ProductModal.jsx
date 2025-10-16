import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";

export default function ProductModal({ product, onClose }) {
  const [closing, setClosing] = useState(false);
  const [qty, setQty] = useState(1);

  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  useEffect(() => {
    if (!product) setClosing(false);
  }, [product]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
      setClosing(false);
    }, 300);
  };

  const increaseQty = () => setQty(qty + 1);
  const decreaseQty = () => setQty(qty > 0 ? qty - 1 : 0);

  if (!product) return null;

  return (
    <div
      className={`modal-backdrop ${closing ? "fade-out" : "fade-in"}`}
      onClick={handleClose}
    >
      <div
        className={`modal ${closing ? "zoom-out" : "zoom-in"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close" onClick={handleClose} aria-label="Close">
          ✕
        </button>

        <div className="modal-grid">
          <div className="modal-image">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="modal-info">
            <h2>{product.title}</h2>
            <p className="meta">Category: {product.category}</p>
            <p className="price">₹{product.price}</p>

            <div className="modal-actions">
              <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
                Qty:
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <button onClick={decreaseQty}>–</button>
                  <input
                    type="number"
                    min="0"
                    value={qty}
                    onChange={(e) =>
                      setQty(Math.max(0, parseInt(e.target.value) || 0))
                    }
                    style={{ width: "50px", textAlign: "center" }}
                  />
                  <button onClick={increaseQty}>+</button>
                </div>
              </label>
            </div>

            <div className="modal-actions" style={{ marginTop: 12 }}>
              <button className="primary" onClick={() => addToCart(product, qty)}>
                Add to cart
              </button>
              <button
                className="ghost"
                onClick={() =>
                  isInWishlist
                    ? removeFromWishlist(product.id)
                    : addToWishlist(product)
                }
              >
                {isInWishlist ? "Remove Wishlist" : "Add Wishlist"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
