import React, { useState, useEffect } from "react";

const SalesCounter = ({ popcornSales, chinchinSales, peanutSales }) => {
  const [popcornCount, setPopcornCount] = useState(0);
  const [chinchinCount, setChinchinCount] = useState(0);
  const [peanutCount, setPeanutCount] = useState(0);

  // Function to simulate the counting with smaller increments
  const animateCount = (target, setter) => {
    let count = 0;
    const interval = setInterval(() => {
      if (count >= target) {
        clearInterval(interval);
      } else {
        count += Math.floor(Math.random() * 10000) + 1; // Smaller increments for smoother animation
        if (count > target) count = target; // Ensure it doesn't exceed the target
        setter(count);
      }
    }, 100); // Adjust speed for smooth animation
  };

  useEffect(() => {
    animateCount(popcornSales, setPopcornCount);
    animateCount(chinchinSales, setChinchinCount);
    animateCount(peanutSales, setPeanutCount);
  }, [popcornSales, chinchinSales, peanutSales]);

  // Function to format numbers with commas
  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <div className="sales-counter-container px-8 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-16 text-black">
        Average Sales Per Pack (Monthly)
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Popcorn */}
        <div className="sales-card popcorn p-8 text-center shadow-lg w-full md:w-1/3 border-r-4 border-[#FF914D]">
          <h2 className="text-2xl font-bold text-gray-800">Classic Popcorn</h2>
          <p className="text-4xl font-bold text-[#FF914D] mt-4">
            {formatNumber(popcornCount)}
          </p>
        </div>

        {/* Chinchin */}
        <div className="sales-card chinchin p-8 text-center shadow-lg w-full md:w-1/3 border-r-4 border-[#F89C42]">
          <h2 className="text-2xl font-bold text-gray-800">Classic Chinchin</h2>
          <p className="text-4xl font-bold text-[#F89C42] mt-4">
            {formatNumber(chinchinCount)}
          </p>
        </div>

        {/* Peanut */}
        <div className="sales-card peanut p-8 text-center shadow-lg w-full md:w-1/3 border-r-4 border-[#F89C42]">
          <h2 className="text-2xl font-bold text-gray-800">Classic Peanut</h2>
          <p className="text-4xl font-bold text-[#F6A800] mt-4">
            {formatNumber(peanutCount)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalesCounter;
