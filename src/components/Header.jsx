import React, { useEffect, useState } from "react";
import logo from "../assets/DeMillerLogo.png";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const clickHam = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`top-0 z-50 fixed w-[100%] transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-[#FF9D23]"
      }`}
    >
      <div className="relative flex items-center justify-between sm:px-8 max-sm:px-8  md:pl-10 md:pr-0 md:py-0 w-[100%]">
        {/* Logo */}
        <img
          src={logo} // Replace with the correct path to your logo
          alt="Company Logo"
          className="w-[52px] h-[72px] md:w-[70px] md:h-[100px] mr-4 "
        />

        {/* Navigation Menu */}
        <nav className=" w-[80%] py-2 ">
          <ul className="hidden md:grid grid-cols-6 items-center gap-6 cursor-pointer font-bold md:text-[8px] lg:text-[14px]">
            {[
              { label: "HOME", to: "/" },
              { label: "OUR COMPANY", to: "/our-company" },
              { label: "PRODUCT", to: "/brands" },
              { label: "SUSTAINABILITY", to: "/sustainability" },
              { label: "CAREERS", to: "/careers" },
              { label: "HOW TO BUY", to: "/how-to-buy" },
            ].map((link, index) => (
              <li
                key={index}
                className={`relative group py-4 text-center transition-all duration-300 ${
                  isScrolled ? "text-black" : "text-white"
                } hover:bg-[#66BB6A] hover:text-black`}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `transition-colors duration-300 ${
                      isActive
                        ? "text-red-600"
                        : isScrolled
                        ? "text-black"
                        : "text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="max-sm:block sm:block md:hidden">
          <button
            onClick={clickHam}
            className="group flex flex-col justify-between w-8 h-6 relative z-50"
          >
            <span
              className={`block h-1 w-full bg-black transform transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-[10px]" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-full bg-yellow-600 transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-1 w-full bg-black transform transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[10px] bg-yellow-600 " : ""
              }`}
            ></span>
          </button>

          {isOpen && (
            <div className="fixed z-40 top-0 h-[100vh] left-0 bg-[rgb(254,161,26)] w-full shadow-lg p-8 overflow-auto">
              <h2 className="text-white text-[20px] font-extrabold mb-6 uppercase tracking-wide">
                Menu
              </h2>
              <ul className="space-y-6 text-white text-[18px] font-medium ">
                {[
                  { href: "#home", label: "Home" },
                  { href: "#ourcompany", label: "Our Company" },
                  { href: "#brands", label: "Brands" },
                  { href: "#sustainability", label: "Sustainability" },
                  { href: "#careers", label: "Careers" },
                  { href: "#howtobuy", label: "How To Buy" },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="menu-item border-b-[1px] border-white"
                  >
                    <a
                      href={item.href}
                      className="hover:text-black transition duration-300 flex gap-3 items-center"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-white text-[14px] italic">
                Powered by <span className="font-bold">DeMiller Farms</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
