import React from "react";
import { motion } from "framer-motion";
import mrYinka from "../assets/MrYinka.jpeg";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white px-8 py-20">
      <div className="max-w-screen-lg mx-auto">
        {/* About Us Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Our Story
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Since 2019, <span className="text-yellow-500 font-bold">DeMiller Farms</span> has been on a mission to redefine snacking. 
            From humble beginnings in a small kitchen, we’ve grown into a globally loved brand. 
            With innovation and quality at our core, we’re dedicated to delivering snacks that bring joy to every bite.
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="flex items-center justify-between flex-col-reverse md:flex-row gap-16">
          {/* Text Section */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Built with Passion
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              At DeMiller Farms, we believe that every snack should tell a story of care, craftsmanship, and connection. 
              Guided by our founder’s vision, <span className="text-yellow-500 font-bold">Mr. Yinka</span>, we’ve crafted products 
              that not only taste incredible but create memories for families and friends alike. 
              Excellence isn’t just a value—it’s our promise.
            </p>
          </motion.div>

          {/* Founder Image */}
          <motion.div
            className="flex-1 flex justify-center relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative group">
              <img
                src={mrYinka}
                alt="Founder of DeMiller Farms"
                className="rounded-xl shadow-xl w-[300px] h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 border-4 border-yellow-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
