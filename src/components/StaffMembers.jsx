import React from "react";
import { motion } from "framer-motion";

const staffMembers = [
  {
    name: "Mr. Yinka",
    position: "Founder & CEO",
    image: "../src/assets/test.webp", // Replace with actual image path
  },
  {
    name: "Jane Doe",
    position: "Head of Marketing",
    image: "../src/assets/test.webp", // Replace with actual image path
  },
  {
    name: "John Smith",
    position: "Operations Manager",
    image: "../src/assets/test.webp", // Replace with actual image path
  },
  // Add more staff members as needed
];

const StaffCard = ({ name, position, image }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
    whileHover={{ y: -10 }}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <div className="relative w-full h-72">
      <motion.img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
    </div>
    <div className="p-6 text-center">
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-gray-600">{position}</p>
    </div>
  </motion.div>
);

const OurStaff = () => {
  return (
    <div className="bg-gray-50 px-8 py-16">
      <div className="max-w-screen-xl mx-auto">
        {/* Heading Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600">
            A dedicated team of professionals who bring our vision to life every day.
          </p>
        </motion.div>

        {/* Staff Grid */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {staffMembers.map((staff, index) => (
            <StaffCard
              key={index}
              name={staff.name}
              position={staff.position}
              image={staff.image}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurStaff;
