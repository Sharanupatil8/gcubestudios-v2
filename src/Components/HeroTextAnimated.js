import React from "react";
import { motion } from "framer-motion";

const TextAnimation = () => {
  const text = "Discover the Art of Living";

  const textVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut",
        duration: 0.5,
        delay: index * 0.1, // Adjust the delay as needed
      },
    }),
  };

  return (
    <p className="text-5xl z-100 sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-12">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={index}
        >
          {char}
        </motion.span>
      ))}
    </p>
  );
};

export default TextAnimation;
