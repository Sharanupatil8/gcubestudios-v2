import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function CtaSmall({ setIsModalOpen }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.4 },
    },
  };

  return (
    <section className="cta-bg-image">
      <motion.div
        className="max-w-6xl mx-auto py-8 md:py-16 text-center px-3 md:px-8"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2
          variants={textVariants}
          className="text-white font-bold text-3xl md:text-4xl lg:text-6xl mt-4"
        >
          Have a project in mind?
        </motion.h2>
        <motion.p
          variants={textVariants}
          className="mt-4 text-gray-300 text-lg"
        >
          Transform your ideas into reality with our expert team of designers.
        </motion.p>
        <motion.button
          variants={buttonVariants}
          className="mt-4 md:mt-8 text-white px-4 py-3 border border-white rounded-md font-medium"
          onClick={() => setIsModalOpen(true)}
        >
          Get A Free Quote &nbsp; &rarr;
        </motion.button>
      </motion.div>
    </section>
  );
}

export default CtaSmall;
