import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Testimonial = () => {
  const [animationTriggered, setAnimationTriggered] = useState({
    first: false,
    second: false,
    third: false,
  });

  // Set up Intersection Observers for each card
  const { ref: firstRef, inView: firstInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: secondRef, inView: secondInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: thirdRef, inView: thirdInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (firstInView && !animationTriggered.first) {
      setAnimationTriggered((prevState) => ({
        ...prevState,
        first: true,
      }));
    }
  }, [firstInView, animationTriggered.first]);

  useEffect(() => {
    if (secondInView && !animationTriggered.second) {
      setAnimationTriggered((prevState) => ({
        ...prevState,
        second: true,
      }));
    }
  }, [secondInView, animationTriggered.second]);

  useEffect(() => {
    if (thirdInView && !animationTriggered.third) {
      setAnimationTriggered((prevState) => ({
        ...prevState,
        third: true,
      }));
    }
  }, [thirdInView, animationTriggered.third]);

  return (
    <div>
      <div className="px-8 flex max-sm:flex-col md:flex-row justify-between gap-6 py-20">
        {/* First Testimonial */}
        <div
          ref={firstRef}
          className={`bg-white duration-[1s] transition-all ease-in-out w-full max-w-[480px] rounded-3xl p-8 shadow-2xl relative overflow-hidden border-2 border-black ${
            animationTriggered.first
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="absolute -top-10 -left-10 bg-[rgb(254,161,26)] w-40 h-40 rounded-full blur-3xl opacity-30"></div>

          <h1 className="text-[rgb(96,62,60)] font-bold text-[24px] leading-loose relative z-10">
            <span className="text-[32px] text-[rgb(254,161,26)]">“</span>
            These
            <span className="text-[rgb(254,161,26)]"> classic peanuts</span> are
            the ultimate snack! Roasted to perfection with just the right amount
            of salt. Whether I’m on the go or relaxing at home, they’re always
            by my side. Love them.
            <span className="text-[32px] text-[rgb(254,161,26)]">”</span>
          </h1>

          <div className="mt-6 flex items-center justify-end relative z-10">
            <div className="bg-[rgb(254,161,26)] text-white font-medium text-[18px] px-4 py-2 rounded-full shadow-md">
              - Matthew O.
            </div>
          </div>
        </div>

        {/* Second Testimonial */}
        <div
          ref={secondRef}
          className={`bg-white duration-[1s] transition-all ease-in-out w-full max-w-[480px] rounded-3xl p-8 shadow-2xl relative overflow-hidden border-2 border-black ${
            animationTriggered.second
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="absolute -bottom-5 left-36 bg-[rgb(254,161,26)] w-40 h-40 rounded-full blur-3xl opacity-30"></div>

          <h1 className="text-[rgb(96,62,60)] font-bold text-[24px] leading-loose relative z-10">
            <span className="text-[32px] text-[rgb(254,161,26)]">“</span>
            <span className=" text-[rgb(254,161,26)]">Classic popcorn</span> is
            a game-changer! Every bite is perfectly crunchy and bursting with
            flavor. It's my go-to snack for movie nights and lazy afternoons. I
            honestly can't get enough!
            <span className="text-[32px] text-[rgb(254,161,26)]">”</span>
          </h1>

          <div className="mt-6 flex items-center justify-end relative z-10">
            <div className="bg-[rgb(254,161,26)] text-white font-medium text-[18px] px-4 py-2 rounded-full shadow-md">
              - Michael D.
            </div>
          </div>
        </div>

        {/* Third Testimonial */}
        <div
          ref={thirdRef}
          className={`bg-white duration-[1s] transition-all ease-in-out w-full max-w-[480px] rounded-3xl p-8 shadow-2xl relative overflow-hidden border-2 border-black ${
            animationTriggered.third
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="absolute -top-10 -right-10 bg-[rgb(254,161,26)] w-40 h-40 rounded-full blur-3xl opacity-30"></div>

          <h1 className="text-[rgb(96,62,60)] font-bold text-[24px] leading-loose relative z-10">
            <span className="text-[32px] text-[rgb(254,161,26)]">“</span>
            I’ve tried a lot of snacks, but this{" "}
            <span className="text-[rgb(254,161,26)]">classic chinchin </span> is
            on another level! The perfect balance of crunchiness and sweetness.
            It’s so good, I find myself reaching for another pack every single
            time!
            <span className="text-[32px] text-[rgb(254,161,26)]">”</span>
          </h1>

          <div className="mt-6 flex items-center justify-end relative z-10">
            <div className="bg-[rgb(254,161,26)] text-white font-medium text-[18px] px-4 py-2 rounded-full shadow-md">
              - Sarah J
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
