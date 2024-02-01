import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import HeadingSecondary from "./SecondaryHeading";
import DescriptionText from "./DescriptionText";
import Tilt from "react-parallax-tilt";

const words = ["Explore", "Our", "Design", "Portfolio"];

function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <section
      id="our-services"
      className="container max-w-6xl mt-12 mx-auto px-2 md:px-4 lg:px-8 py-8  md:py-12 lg:py-16 "
    >
      <HeadingSecondary words={words} />
      <DescriptionText
        text={"Explore Our Portfolio of Unforgettable Interior Designs"}
        linkText={"portfolio"}
      />

      <motion.div
        className="grid md:grid-cols-3 gap-x-0 gap-4 md:gap-8 grid-cols-1 mt-8  md:mt-12"
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut", delay: inView ? 0.3 : 0 }}
      >
        <div className="relative row-span-2">
          <Tilt>
            <div className="absolute h-40 w-full bottom-0 left-0 bg-gradient-to-b from-transparent to-yellow-900 opacity-70"></div>

            <div className="flex items-end justify-center absolute left-2/4 -translate-x-1/2 w-full bottom-4 text-white font-medium text-md lg:text-lg">
              <p>Restaurant Interiors</p>
            </div>
            <img
              src="assets/restaurant-interiors.webp"
              alt="saloon interior design by G Cube Studios"
              className="w-full rounded-md shadow-md object-cover"
            />
          </Tilt>
        </div>
        <Link to="/home-interiors">
          <div className="relative overflow-hidden">
            <div className="absolute h-40 w-full bottom-0 left-0 bg-gradient-to-b from-transparent to-yellow-900 opacity-70"></div>

            <div className="flex items-end justify-center absolute left-2/4 -translate-x-1/2 w-full bottom-4 text-white font-medium text-md lg:text-lg">
              <p>Home Interiors</p>
            </div>

            <img
              src="assets/home-interiors.webp"
              alt="kitchen interior design by G Cube Studios"
              className="w-full rounded-md shadow-md object-cover "
            />
          </div>
        </Link>

        <Link to="/saloon">
          <div className="relative">
            <div className="absolute h-40 w-full bottom-0 left-0 bg-gradient-to-b from-transparent to-yellow-900 opacity-70"></div>
            <div className="flex items-end justify-center absolute left-2/4 -translate-x-1/2 w-full bottom-4 text-white font-medium text-md lg:text-lg">
              <p>Saloon / Spa Interiors</p>
            </div>
            <img
              src="assets/saloon-spa.webp"
              alt="saloon and spa interior design by G Cube Studios"
              className="w-full rounded-md shadow-md object-cover"
            />
          </div>
        </Link>

        <Link to="/gym-interiors">
          <div className="relative">
            <div className="absolute h-40 w-full bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900 opacity-70"></div>
            <div className="flex items-end justify-center absolute left-2/4 -translate-x-1/2 w-full bottom-4 text-white font-medium text-md lg:text-lg">
              <p>Gym Interiors</p>
            </div>
            <img
              src="assets/gym.webp"
              alt="kitchen interior design by G Cube Studios"
              className="w-full h-full object-cover rounded-md shadow-md hover:scale-101 duration-75 ease-linear"
            />
          </div>
        </Link>
        <Link to="/home-interiors">
          <div className="relative">
            <div className="absolute h-40 w-full bottom-0 left-0 bg-gradient-to-b from-transparent to-sky-900 opacity-70"></div>
            <div className="flex items-end justify-center absolute left-2/4 -translate-x-1/2 w-full bottom-4 text-white font-medium text-md lg:text-lg">
              <p>Kitchen Interiors</p>
            </div>
            <img
              src="assets/kitchen-interiors.webp"
              alt="kitchen interior design by G Cube Studios"
              className="w-full rounded-md shadow-md"
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
}

export default Projects;
