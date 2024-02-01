import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeadingSecondary from "../Components/SecondaryHeading";
import { images } from "../PortfolioImages";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WhatsAppButton from "../Components/Whatsapp";

const words = ["Explore", "Our", "Project", "Gallery"];

const Portfolio = () => {
  return (
    <section>
      <section className="w-full banner-small">
        <Navbar />
        <div className="max-w-6xl mx-auto text-center text-white text-3xl md:text-6xl font-bold mt-20 tracking-wide">
          <h2>Our Projects</h2>
        </div>
      </section>

      <section className="container max-w-6xl mt-12 mx-auto px-2 md:px-4 lg:px-8 py-8  md:py-12 lg:py-16">
        <HeadingSecondary words={words} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 py-8 md:py-12">
          {images.map((project) => (
            <motion.div
              key={project.name}
              className="cursor-pointer shadow-md bg-opacity-90 rounded-lg overflow-hidden"
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <Link to={project.link}>
                <img
                  alt={project.name}
                  className="w-full h-56 object-cover rounded-t-lg transition-transform duration-300 transform hover:scale-105 hover:translate-y-1"
                  src={project.url}
                />
                <div className="p-3">
                  <h3 className="text-xl mt-2 text-gray-800 font-medium text-center">
                    {project.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </section>
  );
};

export default Portfolio;
