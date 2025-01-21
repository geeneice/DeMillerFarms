import React from "react";
import "./Product.css"; // Import the custom CSS file

const Product = () => {
  return (
    <div
      className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[600px] flex items-center justify-center bg-gray-100 bg-cover bg-center"
      style={{ backgroundImage: "url('../src/assets/product-hero.jpg')" }}
    >
      {/* Header */}
      <div className="relative text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-white">
          Our{" "}
          <span className="color-changing-text grow-and-shrink">Products</span>
        </h2>
      </div>
    </div>
  );
};

export default Product;
