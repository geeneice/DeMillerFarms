import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import sustainabilityImg from "../assets/sustainability.webp";
import communityImg from "../assets/community.jpg";

const GlobalImpact = () => {
  const [animationTriggered, setAnimationTriggered] = useState({
    sustainability: false,
    community: false,
  });

  const { ref: sustainRef, inView: sustainInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
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

  return (
    <section className="px-6 py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          <span className="bg-yellow-500 text-white px-3 py-1 rounded-md">GLOBAL</span>{" "}
          IMPACT
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Sustainability Section */}
        <div
          ref={sustainRef}
          className={`transition-transform duration-[1s] ease-in-out ${
            animationTriggered.sustainability ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } flex flex-col items-center bg-white rounded-lg shadow-md p-6 w-[450px]`}
        >
          <div className="flex-shrink-0 h-64 w-full mb-4">
            <img
              src={sustainabilityImg}
              alt="Sustainability"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Supply Chain Sustainability</h2>
          <p className="text-sm text-gray-600 text-center flex-grow">
            Our mission is to convert our farm products into wholesome, reasonably priced snacks for shelves throughout Africa.
          </p>
          <div className="mt-4 text-yellow-500 font-bold underline text-sm cursor-pointer">
            Read More
          </div>
        </div>

        {/* Community Section */}
        <div
          ref={communityRef}
          className={`transition-transform duration-[1s] ease-in-out ${
            animationTriggered.community ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } flex flex-col items-center bg-white rounded-lg shadow-md p-6 w-[450px]`}
        >
          <div className="flex-shrink-0 h-64 w-full mb-4">
            <img
              src={communityImg}
              alt="Community"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Empowering Communities</h2>
          <p className="text-sm text-gray-600 text-center flex-grow">
            We positively impact Nigerian and African society through sustainability programs and initiatives.
          </p>
          <div className="mt-4 text-yellow-500 font-bold underline text-sm cursor-pointer">
            Read More
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalImpact;
