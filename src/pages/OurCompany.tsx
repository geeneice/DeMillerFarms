import React from "react";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import AboutUs from "../components/AboutSection";
import OurStaff from "../components/StaffMembers";
import Header from "../components/Header";

const OurCompany = () => {
  return (
    <div>
      <Header />
      <div className="bg-white px-8 py-16">
        <div className="max-w-screen-md mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Welcome to DeMiller Farms
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            At Demiller Farms, we believe in crafting the finest,
            most delicious snacks with a focus on quality, sustainability, and
            innovation. Our mission is to bring joy to every bite and nurture a
            better future for snack lovers around the world.
          </p>

          <p className="mt-8 text-yellow-500 font-semibold text-lg">
            Taste the difference. Love the experience.
          </p>
        </div>
      </div>
      <AboutUs />
      <OurStaff />
      <Footer />
    </div>
  );
};

export default OurCompany;
