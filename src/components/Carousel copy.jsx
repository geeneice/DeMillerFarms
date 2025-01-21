import React from "react";
import { Carousel } from "antd";
import "./Carousel.css";

const CarouselCard = () => (
  <div className="relative">
    <Carousel autoplay dots={false}>
      <div className="!flex !place-items-center justify-between h-[88vh] bg-[url('../src/assets/african.webp')] bg-cover bg-center md:px-4 px-4 py-8 text-white md:text-start max-sm:text-start max-sm:h-[380px]">
        <div className="md:px-8 max-sm:h-[220px] flex flex-col justify-between max-sm:place-items-start md:place-items-start animate-slide-up">
          <div>
            <h2 className="relative inline-block text-center px-10 py-6 md:text-[56px] max-sm:text-[20px] font-extrabold text-white bg-[#f7c469] rounded-lg shadow-lg tracking-wide">
              <span className="relative z-10">
                Spreading Joy, <br /> One Snack at a Time
              </span>
              <div className="absolute inset-0 rounded-lg -z-10 bg-[radial-gradient(circle,_yellow,_rgb(233,46,35),_transparent)] opacity-80"></div>
            </h2>

            <p className="md:text-[20px] max-sm:text-[12px] animate-slide-in">
              Our mission is to deliver delicious, <br /> wholesome snacks
              across Africa, creating joyful <br /> moments and nourishing{" "}
              <br />
              families with every bite.
            </p>
          </div>
        </div>
      </div>
    </Carousel>

    {/* Scroll Down Arrows */}
    <div className="absolute left-1/2 bottom-6 transform -translate-x-1/2  flex-col space-y-4 animate-bounce md:flex hidden">
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
        className="h-8 w-8 text-yellow-400 cursor-pointer"
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

      {/* Arrow 3 */}
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
    </div>
  </div>
);

export default CarouselCard;
