import React from "react";
import logo from "../assets/DeMillerLogo.png";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <div className="w-full h-[80%] bg-[#FFC107] text-white py-16 pt-[150px] px-8 md:px-48 flex flex-col gap-8 mt-[-4px] shadow-lg clipped relative">
      <div className="flex flex-row justify-between items-center w-full">
        <img
          src={logo}
          alt="Logo"
          className="w-[52px] h-[72px] transition-transform transform hover:scale-105"
        />

        <p
          className="font-semibold flex flex-row items-center gap-3 cursor-pointer hover:text-[#4CAF50] transition-all pr-16"
          onClick={scrollToTop}
        >
          Back to top
          <FaArrowCircleUp className="text-[20px] transition-transform transform hover:scale-125 " />
        </p>
      </div>

      <div className="md:flex md:flex-row justify-between items-center text-center md:text-left">
        <h1 className="font-semibold flex items-center gap-1 hover:underline cursor-pointer text-xl">
          Careers <FiArrowUpRight />
        </h1>

        <div className="flex gap-6 justify-center md:justify-start text-[24px]">
          <BiLogoFacebookSquare className="hover:text-[#4267B2] transition-all cursor-pointer transform hover:scale-125" />
          <FaXTwitter className="hover:text-black transition-all cursor-pointer transform hover:scale-125" />
          <FaLinkedinIn className="hover:text-[#0077b5] transition-all cursor-pointer transform hover:scale-125" />
          <IoLogoYoutube className="hover:text-[#FF0000] transition-all cursor-pointer transform hover:scale-125" />
          <FaSquareInstagram className="hover:text-[#E4405F] transition-all cursor-pointer transform hover:scale-125" />
        </div>
      </div>

      <div className="flex flex-wrap justify-between md:flex-row gap-6 md:gap-0 text-center">
        <div>
          <h1 className="text-[rgb(96,62,60)] font-semibold">Ogun State</h1>
          <p>6 , Channels Avenue, Opic, Ogun State.</p>
        </div>

        <div>
          <h1 className="text-[rgb(96,62,60)] font-semibold">Lagos State</h1>
          <p>KM 33 Lekki-Epe Expressway Shapati, Lagos</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <h1 className="flex items-center gap-1 text-[12px] text-gray-200">
          <FaRegCopyright className="text-[12px]" />
          DeMillerFarms 2025
        </h1>

        <ul className="flex flex-wrap justify-center md:justify-start gap-5 text-white text-[12px] cursor-pointer">
          <li className="relative group hover:text-yellow-400 transition-all">
            <a href="">Home</a>
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500"></span>
          </li>
          <li className="relative group hover:text-yellow-400 transition-all">
            <a href="">Our Company</a>
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500"></span>
          </li>
          <li className="relative group hover:text-yellow-400 transition-all">
            <a href="">Brands</a>
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500"></span>
          </li>
          <li className="relative group hover:text-yellow-400 transition-all">
            <a href="">Sustainability</a>
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500"></span>
          </li>

          <li className="relative group hover:text-yellow-400 transition-all">
            <a href="">How To Buy</a>
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500"></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
