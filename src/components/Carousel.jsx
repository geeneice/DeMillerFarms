import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import "./Carousel.css";

import peanut from "../assets/peanut.png";
import popcorn from "../assets/pop-corn.png";
import chinchin from "../assets/chin-chin.png";

const CarouselCard = () => {
  const images = [peanut, popcorn, chinchin];
  const [currentImage, setCurrentImage] = useState(0);
  const [currentWord, setCurrentWord] = useState("Happiness"); // Initial word

  const words = ["Happiness", "Love", "Joy"]; // Sequence of words

  useEffect(() => {
    // Set an interval to change the word every 2 seconds
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative">
      <Carousel autoplay dots={false}>
        <div className="!flex !place-items-center justify-between max-sm:h-[40vh] lg:h-[100vh] md:h-[72vh] sm:h-[70vh] bg-[#FF9D23] bg-cover bg-center md:px-4 px-4 py-8 max-sm:py-0 text-white md:text-start max-sm:text-start">
          <div className="md:px-8 max-sm:pt-10 max-sm:h-[220px] max-sm:px-2 flex flex-col justify-between max-sm:place-items-start md:place-items-start animate-slide-up">
            <div>
              <h2 className="relative inline-block py-0 lg:text-[70px]  md:text-[56px] max-sm:text-[20px] sm:text-[20px] text-white tracking-wide font-extrabold">
                <span className="relative z-10">
                  Spreading{" "}
                  <span
                    className="Modak font-normal text-[#F93827] animate-change-text"
                    style={{
                      animation: "textChange 6s infinite", // Apply animation here
                    }}
                  >
                    {currentWord}
                  </span>
                  , <br /> One{" "}
                  <span className="Modak font-normal text-[#F93827]">
                    Snack{" "}
                  </span>{" "}
                  at a Time
                </span>
              </h2>

              <p className="md:text-[20px] max-sm:text-[8px] animate-slide-in font-semibold w-[70%]">
                Our mission is to deliver delicious, wholesome{" "}
                <span className="font-Barrio">snacks</span> across Africa,
                creating joyful moments and nourishing families with every bite.
              </p>
            </div>
          </div>

          <div
            className="lg:w-[50%] md:w-[100%] max-sm:w-[100%] animate-roll-in transition-transform duration-[2000ms] ease-in-out"
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
      <div className="absolute left-1/2 bottom-6 transform -translate-x-1/2 flex-col space-y-4 animate-bounce lg:flex hidden">
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
              top: 572, // Replace with the desired position
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
              top: 506, // Replace with the desired position
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
