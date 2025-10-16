// sample product data. Replace images with your assets if you want.
const products = [
  {
    id: 1,
    title: "Cuffed Knit Sweater",
    price: 49,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    color: "Sand",
    popularity: 95,
    addedAt: "2025-07-01",
  },
  {
    id: 2,
    title: "Minimalist White Shirt",
    price: 35,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop",
    color: "White",
    popularity: 88,
    addedAt: "2025-08-10",
  },
  {
    id: 3,
    title: "Classic Denim Jacket",
    price: 79,
    category: "Men",
    image:
      "https://www.shutterstock.com/image-photo/blue-denim-jacket-isolated-over-600nw-310155074.jpg",
    color: "Blue",
    popularity: 92,
    addedAt: "2025-06-22",
  },
  {
    id: 4,
    title: "Soft Linen Top",
    price: 42,
    category: "Women",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxKTcsYWRbiSGFO1JT5Q7DdK5sFY34ISb4Yw&s",
    color: "Olive",
    popularity: 70,
    addedAt: "2025-08-20",
  },
  {
    id: 5,
    title: "Relaxed Chinos",
    price: 59,
    category: "Men",
    image:
      "https://thehouseofrare.com/cdn/shop/files/CHAMER-BEIGE2173.jpg?v=1750848505&width=540",
    color: "Khaki",
    popularity: 80,
    addedAt: "2025-04-12",
  },

  {
    id: 6,
    title: "Oversized Hoodie",
    price: 65,
    category: "Women",
    image:
      "https://m.media-amazon.com/images/I/310J9FhOqnL.jpg",
    color: "Charcoal",
    popularity: 98,
    addedAt: "2025-08-30",
  },

  /* ---- More Men ---- */
  {
    id: 7,
    title: "Slim Fit Jeans",
    price: 72,
    category: "Men",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQwZ8fNRjhIIE-l8XS5bJZwke_kqWt9y7NMwyb01EMp8fQHAne2qXckZCO83mB2WCLD8Z3ljdOdSyIVuopBQ-mdCrP2tLoDnlFQYPtpQ_pYQvcth-DH-Swp",
    color: "Indigo",
    popularity: 85,
    addedAt: "2025-09-01",
  },
  {
    id: 8,
    title: "Checked Casual Shirt",
    price: 45,
    category: "Men",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQNXR_0L4dg0vhdsk7Zk5o-90Os4gAyundyTCU8ihwhVONg36BBeEV61nhq8xYnyCjaaqGgsSjZJAlRu5x2BziNGetevDMuWY4pF9hAQulEZS4oznO2J4hn&usqp=CAc",
    color: "Red/Black",
    popularity: 78,
    addedAt: "2025-08-22",
  },
  {
    id: 9,
    title: "Classic Leather Jacket",
    price: 120,
    category: "Men",
    image:
      "https://www.mercywear.in/cdn/shop/files/Exotix_Faux_Leather_Oversized_Unisex_Coach_Jacket_-_Premium_Streetwear_OuterwearStep_into_bold_.heic_2.jpg?v=1755372325&width=823",
    color: "Black",
    popularity: 99,
    addedAt: "2025-07-15",
  },
  {
    id: 10,
    title: "Casual Polo T-Shirt",
    price: 38,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1200&auto=format&fit=crop",
    color: "Navy",
    popularity: 76,
    addedAt: "2025-09-05",
  },

  /* ---- More Women ---- */
  {
    id: 11,
    title: "Summer Floral Dress",
    price: 89,
    category: "Women",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQwjahQYuTKQaN4HVWaD7fY0d-tzzHTIOcVUmb8a196lkFgQNGG6cT2H2eeRGgU2NjL3I7kGaRuEOZW3b96dE59df20-XH67gkEUCXWt4OXxpS7NtUFM4re",
    color: "Floral",
    popularity: 90,
    addedAt: "2025-08-28",
  },
  {
    id: 12,
    title: "High Waist Jeans",
    price: 68,
    category: "Women",
    image:
      "https://image.hm.com/assets/hm/14/c7/14c7c0a89b1bf48a65c3479c7fef9fb76ad99d6e.jpg?imwidth=1260",
    color: "Light Blue",
    popularity: 83,
    addedAt: "2025-08-18",
  },
  {
    id: 13,
    title: "Knitted Cardigan",
    price: 54,
    category: "Women",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQeaT2HgTSHGRkbYYZPfgUEMFQJMHHaYWts0i1EDXIbkemLTBEQ94YquGznq9YDcIgLZEKSKCOd9sSkoYwoMeT40ibkIJk1CYLMMgXduaat5I8fahZxMj0Ybw",
    color: "Cream",
    popularity: 74,
    addedAt: "2025-09-02",
  },
  {
    id: 14,
    title: "Casual Crop Top",
    price: 32,
    category: "Women",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS7YnwK1CGAeov5Clpk_fjMHR4_svLDTL5_5ldBZrNtgKBEFhhmD2artfo005MAajevaY_Uxs8aCeFmS4e2gtty73P6IWyZGGqNfpxTQNPtnT-xnd3tMrJo",
    color: "Black",
    popularity: 81,
    addedAt: "2025-09-06",
  },

  /* ---- Kids ---- */
  {
    id: 15,
    title: "Kids Graphic T-Shirt",
    price: 25,
    category: "Kids",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop",
    color: "Yellow",
    popularity: 87,
    addedAt: "2025-08-25",
  },
  {
    id: 16,
    title: "Kids Denim Overalls",
    price: 40,
    category: "Kids",
    image:
      "https://m.media-amazon.com/images/I/71E0sfV+SCL.jpg",
    color: "Blue",
    popularity: 82,
    addedAt: "2025-08-14",
  },
  {
    id: 17,
    title: "Kids Hoodie",
    price: 35,
    category: "Kids",
    image:
      "https://static.zara.net/assets/public/85a4/beb7/9fb445db86da/98326aff7ffd/01165739300-p/01165739300-p.jpg?ts=1755761705049&w=1024",
    color: "Grey",
    popularity: 79,
    addedAt: "2025-09-03",
  },
  {
    id: 18,
    title: "Kids Summer Shorts",
    price: 22,
    category: "Kids",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRhgb7GUpI6mY72KGElX32FH8H4RQsZT7xylzrNkknanarFcjhxrmpc0kEwicRix250MoGDPG3sMFrbmlnAUeezuQOIaw8F7u8izz22xXymAynR0jChLLkKqw",
    color: "Green",
    popularity: 75,
    addedAt: "2025-09-07",
  },
];

// add actualPrice automatically (30% higher than price)
const updatedProducts = products.map((p) => ({
  ...p,
  actualPrice: Math.round(p.price * 1.3),
}));

export default updatedProducts;
