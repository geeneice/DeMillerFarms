import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import "./Carousel.css";

import peanut from "../assets/peanut.png";
import popcorn from "../assets/pop-corn.png";
import chinchin from "../assets/chin-chin.png";

const CarouselCard = () => {
  const images = [peanut, popcorn, chinchin];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative">
      <Carousel autoplay dots={false}>
        <div className="!flex !place-items-center justify-between max-sm:h-[40vh] md:h-[100vh] sm:h-[70vh] bg-[#FFC107] bg-cover bg-center md:px-4 px-4 py-8 max-sm:py-0 text-white md:text-start max-sm:text-start">
          <div className="md:px-8 max-sm:pt-10 max-sm:h-[220px] max-sm:px-2 flex flex-col justify-between max-sm:place-items-start md:place-items-start animate-slide-up">
            <div>
              <h2 className="relative inline-block py-0 md:text-[70px] max-sm:text-[20px] text-white tracking-wide font-extrabold">
                <span className="relative z-10">
                  Spreading Joy, <br /> One Snack at a Time
                </span>
              </h2>

              <p className="md:text-[20px] max-sm:text-[8px] animate-slide-in font-semibold w-[70%]">
                Our mission is to deliver delicious, wholesome snacks across
                Africa, creating joyful moments and nourishing families with
                every bite.
              </p>
            </div>
          </div>

          
          <div
            className="md:w-[50%] max-sm:w-[100%] animate-roll-in transition-transform duration-[2000ms] ease-in-out"
            style={{
              transform: "", // Slight zoom effect
              opacity: 1,
              transition: "opacity 2s ease-in-out, transform 2s ease-in-out",
            }}
          >
            <img
              src={images[currentImage]}
              alt=""
              className="w-full h-auto rounded-xl max-sm:w-[200px] "
            />
          </div>
        </div>
      </Carousel>

      {/* Scroll Down Arrows */}
      <div className="absolute left-1/2 bottom-6 transform -translate-x-1/2 flex-col space-y-4 animate-bounce md:flex hidden">
        {/* Arrow 1 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() =>
            window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>

        {/* Arrow 2 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-[#F44336] cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() =>
            window.scrollTo({
              top: 676, // Replace with the desired position
              behavior: "smooth",
            })
          }
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>

        {/* Arrow 3 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() =>
            window.scrollTo({
              top: 676, // Replace with the desired position
              behavior: "smooth",
            })
          }
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default CarouselCard;
