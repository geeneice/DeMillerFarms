import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import sustainability from "../assets/sustainability.webp";
import community from "../assets/community.jpg";
import peanuthold from "../assets/peanut-holder.png";

const GlobalImpact = () => {
  const [expanded, setExpanded] = useState({
    sustainability: false,
    community: false,
  });

  const [animationTriggered, setAnimationTriggered] = useState({
    sustainability: false,
    community: false,
  });

  // Refs for intersection observer with dynamic triggers
  const { ref: sustainRef, inView: sustainInView } = useInView({
    triggerOnce: false, // Allows re-triggering on re-entry
    threshold: 0.2, // Trigger animation when 20% of the element is visible
  });

  const { ref: communityRef, inView: communityInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (sustainInView && !animationTriggered.sustainability) {
      setAnimationTriggered((prevState) => ({
        ...prevState,
        sustainability: true,
      }));
    }
  }, [sustainInView, animationTriggered.sustainability]);

  useEffect(() => {
    if (communityInView && !animationTriggered.community) {
      setAnimationTriggered((prevState) => ({
        ...prevState,
        community: true,
      }));
    }
  }, [communityInView, animationTriggered.community]);

  const toggleExpand = (section) => {
    setExpanded((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="px-8 py-12 bg-gray-100">
      <div className="relative">
        <img
          src={peanuthold}
          className="w-[5%] absolute -top-3 left-[35.1%] max-sm:hidden sm:hidden lg:block"
          alt=""
        />
        <h1 className="text-[36px] font-extrabold text-center mb-16 text-gray-800">
          <span className="bg-[#FFC107] text-white px-4">GLOBAL</span>IMPACT
        </h1>
      </div>
      {/* Sustainability Section */}
      <div
        ref={sustainRef}
        className={`grid lg:grid-cols-2 gap-8 items-center mb-16 transform transition-all duration-700 ease-out ${
          animationTriggered.sustainability
            ? "opacity-100 translate-y-0" // When in view, show
            : "opacity-0 translate-y-20" // When out of view, hide
        }`}
      >
        <img
          src={sustainability}
          alt="sustainability"
          className="w-full h-auto rounded-xl shadow-lg"
        />
        <div className="relative bg-white p-8 rounded-xl shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105">
          <h1 className="text-[24px] font-bold text-gray-800">
            Supply Chain Sustainability
          </h1>
          <p className="font-medium text-[16px] text-gray-600 mt-4">
            Our mission is to convert our farm products into wholesome,
            delectable, and reasonably priced snacks and distribute them on
            snack shelves throughout Africa.
          </p>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              expanded.sustainability ? "max-h-64 mt-4" : "max-h-0"
            }`}
          >
            <p className="font-medium text-[14px] text-gray-600">
              Additional details about our sustainability efforts and how we are
              committed to reducing environmental impact while improving the
              livelihoods of farmers and communities involved.
            </p>
          </div>
          <button
            className="mt-6 w-full bg-[#FFC107] text-white font-bold py-2 rounded-full hover:bg-yellow-500 transition-all"
            onClick={() => toggleExpand("sustainability")}
          >
            {expanded.sustainability ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>

      {/* Community Section */}
      <div
        ref={communityRef}
        className={`grid lg:grid-cols-2 gap-8 items-center transform transition-all duration-700 ease-out ${
          animationTriggered.community
            ? "opacity-100 translate-y-0" // When in view, show
            : "opacity-0 translate-y-20" // When out of view, hide
        }`}
      >
        <div className="relative bg-white p-8 rounded-xl shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105">
          <h1 className="text-[24px] font-bold text-gray-800">
            Empowering Communities
          </h1>
          <p className="font-medium text-[16px] text-gray-600 mt-4">
            We are concerned with empowering and positively impacting the
            Nigerian and African society at large through our sustainability
            programs and initiatives.
          </p>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              expanded.community ? "max-h-64 mt-4" : "max-h-0"
            }`}
          >
            <p className="font-medium text-[14px] text-gray-600">
              Learn how we are working with local communities to create
              opportunities, foster education, and promote sustainable
              development across various regions in Africa.
            </p>
          </div>
          <button
            className="mt-6 w-full bg-[#FFC107] text-white font-bold py-2 rounded-full hover:bg-yellow-500 transition-all"
            onClick={() => toggleExpand("community")}
          >
            {expanded.community ? "Read Less" : "Read More"}
          </button>
        </div>
        <img
          src={community}
          alt="community"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default GlobalImpact;
