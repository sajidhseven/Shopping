import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import productsData from "../data"; // ✅ import data to validate

export default function ProductGrid({ products }) {
  const [selected, setSelected] = useState(null);

  // ✅ Filter out products that don’t exist in data.js
  const validProducts = products.filter((p) =>
    productsData.some((dataP) => dataP.id === p.id)
  );

  return (
    <section className="product-grid">
      <div className="grid">
        {validProducts.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onQuickView={() => setSelected(p)}
          />
        ))}
      </div>

      {selected && (
        <ProductModal
          product={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
