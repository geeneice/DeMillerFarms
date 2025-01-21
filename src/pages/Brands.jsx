import React from "react";
import Header from "../components/Header";
import Product from "../components/Product";
import ProductList from "../components/Ingredient";
import Footer from "../components/Footer";


const Brands = () => {
  const products = [
    {
      image: "../src/assets/prod1.png",
      title: "Classic Peanut",
      ingredients: ["Cashews", "Honey", "Salt", "Peanut Butter"],
      nutritionalFacts: [
        { label: "Calories", value: "200 kcal" },
        { label: "Fat", value: "15g" },
        { label: "Carbohydrates", value: "20g" },
        { label: "Protein", value: "5g" },
      ],
    },
    {
      image: "../src/assets/prod2.png",
      title: "Classic PopCorn",
      ingredients: ["Almonds", "Coconut", "Cacao", "Honey"],
      nutritionalFacts: [
        { label: "Calories", value: "180 kcal" },
        { label: "Fat", value: "14g" },
        { label: "Carbohydrates", value: "18g" },
        { label: "Protein", value: "6g" },
      ],
    },
    {
      image: "../src/assets/prod3.png",
      title: "Classic ChinChin",
      ingredients: ["Almonds", "Coconut", "Cacao", "Honey"],
      nutritionalFacts: [
        { label: "Calories", value: "180 kcal" },
        { label: "Fat", value: "14g" },
        { label: "Carbohydrates", value: "18g" },
        { label: "Protein", value: "6g" },
      ],
    },
  ];

  return (
    <div>
      <Header />
  
      <Product />
      <ProductList products={products} />
      <Footer />
    </div>
  );
};

export default Brands;
