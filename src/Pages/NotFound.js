import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WhatsAppButton from "../Components/Whatsapp";

const NotFoundAnimation = () => {
  const variants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center py-16"
      initial="initial"
      animate="animate"
      variants={variants}
    >
      <motion.h2 className="text-3xl md:text-6xl font-bold mb-8">404</motion.h2>
      <motion.p className="text-lg md:text-xl text-gray-600">
        Oops! The page you are looking for could not be found.
      </motion.p>
      <Link
        to="/"
        className="my-4 md:my-8 text-lg bg-red-500 text-white px-4 py-2"
      >
        Go Back To Home &nbsp; &rarr;
      </Link>
    </motion.div>
  );
};

const NotFound = () => {
  return (
    <section>
      <section className="w-full banner-small">
        <Navbar />
      </section>
      <NotFoundAnimation />
      <Footer />
      <WhatsAppButton />
    </section>
  );
};

export default NotFound;
