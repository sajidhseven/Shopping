import React from "react";
import { useCart } from "./CartContext";
import "./Cart.css"; // ✅ Make sure to import this

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useCart();

  if (cart.length === 0) {
    return <h2 className="empty-cart">Your cart is empty 🛒</h2>;
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="cart-container">
      <h2>My Cart</h2>
      <div className="cart-grid">
        {cart.map((product) => (
          <div key={product.id} className="cart-item">
            <div className="cart-item-left">
              <img src={product.image} alt={product.title} className="cart-item-img" />
              <div className="cart-item-details">
                <h3>{product.title}</h3>
                {product.color && <p className="product-color">{product.color}</p>}
              </div>
            </div>

            <div className="cart-item-right">
              <div className="qty-control">
                <button onClick={() => updateQty(product.id, product.qty - 1)}>-</button>
                <span>{product.qty}</span>
                <button onClick={() => updateQty(product.id, product.qty + 1)}>+</button>
              </div>
              <p className="price">₹{product.price * product.qty}</p>
              <button className="remove-btn" onClick={() => removeFromCart(product.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <h3>Total Price: ₹{total}</h3>
      </div>
    </div>
  );
};

export default Cart;
