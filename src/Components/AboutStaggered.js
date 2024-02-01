import React from "react";
import { motion } from "framer-motion";

const StaggeredAnimationAbout = () => {
  const items = [
    { label: "Save more space", value: "25%" },
    { label: "Customer Support", value: "24 / 7" },
    { label: "Free Service Warranty", value: "6 months" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="w-3/4 mx-auto lg:mx-0">
      <motion.div
        className="flex justify-between items-center mt-4 font-medium text-body"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {items.map((item, index) => (
          <motion.p key={index} variants={itemVariants}>
            {item.label}
          </motion.p>
        ))}
      </motion.div>
      {items.map((item, index) => (
        <div key={index}>
          <motion.div
            className="w-full bg-slate-200 h-1 mt-2"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="w-full bg-red-400 h-1"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            ></motion.div>
          </motion.div>
          <div className="flex justify-between items-center mt-4 font-medium text-body">
            <motion.p variants={itemVariants}>{item.label}</motion.p>
            <motion.p variants={itemVariants}>{item.value}</motion.p>
          </div>
          <motion.div
            className="w-full bg-slate-200 h-1 mt-2"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="w-1/2 bg-red-400 h-1"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            ></motion.div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default StaggeredAnimationAbout;
