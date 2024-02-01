import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import HeadingSecondary from "./SecondaryHeading";

export default function About() {
  const [imageNumber, setImageNumber] = useState(1);
  const location = useLocation();
  console.log(location);

  const handleNextImage = () => {
    setImageNumber((prev) => (prev < 3 ? prev + 1 : 1));
  };

  const handlePrevImage = () => {
    setImageNumber((prev) => (prev > 1 ? prev - 1 : 3));
  };

  const words = ["About", "Our", "Design", "Philosophy"];

  return (
    <motion.section
      id="design-philosophy"
      className="container max-w-6xl mt-12 mx-auto px-2 md:px-4 lg:px-8 py-8 md:py-12 lg:py-16"
    >
      <HeadingSecondary words={words} />

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 md:mt-16 gap-y-8 lg:gap-y-8 gap-x-0 md:gap-x-16 text-center lg:text-start">
        <div className="col-span-full mb-0 lg:mb-4">
          <div className="flex flex-col lg:flex-row items-center  lg:items-center lg:justify-between justify-center">
            <motion.p
              whileInView={{ y: [-10, 0], duration: 500 }}
              className="heading-description"
            >
              Crafting Designs that Bring Your Vision to Life.
            </motion.p>
            <Link
              to="/about-us"
              className="text-red-600 px-3  py-2 font-medium text-lg"
            >
              Read More <span className="">&rarr;</span>
            </Link>
          </div>
        </div>

        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-body quote">
            At <strong className="text-red-600">G Cube Studios</strong>, we
            pride ourselves on crafting design philosophies that transcend the
            ordinary, harnessing the transformative power of spaces to shape
            experiences and enrich lives. Our approach is rooted in the seamless
            fusion of aesthetic appeal and functionality, weaving unique
            narratives of comfort and style into every design. With an
            unwavering commitment to innovation and a meticulous eye for detail,
            we transform environments into personalized sanctuaries that
            resonate deeply with our clients' lifestyles.
          </p>
          <div className="w-3/4 mx-auto lg:mx-0">
            <div className="flex justify-between items-center mt-4 font-medium text-body">
              <p className="  ">Save more space</p>
              <p className="">25%</p>
            </div>
            <div className="w-full bg-slate-200 h-1 mt-2">
              <div className="w-3/4 bg-red-400 h-1"></div>
            </div>

            <div className="flex justify-between items-center mt-4 font-medium text-body">
              <p className="  ">Customer Support</p>
              <p className="">24 / 7</p>
            </div>
            <div className="w-full bg-slate-200 h-1 mt-2">
              <div className="w-full bg-red-400 h-1"></div>
            </div>

            <div className="flex justify-between items-center mt-4 font-medium text-body">
              <p className="  ">Free Service Warranty</p>
              <p className="">6 months</p>
            </div>
            <div className="w-full bg-slate-200 h-1 mt-2">
              <div className="w-1/2 bg-red-400 h-1"></div>
            </div>
          </div>
        </motion.div>
        <div>
          <AnimatePresence mode="wait">
            <motion.img
              key={imageNumber}
              src={`assets/design-philosophy-${imageNumber}.webp`}
              alt={`Saloon and Spa interior design By G Cube Studios Bangalore ${imageNumber}`}
              className="object-cover mx-auto block lg:mx-0 mt-4 lg:mt-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          <div className="flex space-x-4  text-2xl justify-center lg:justify-end mt-4">
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="bg-gray-100 p-4 rounded-md cursor-auto"
              onClick={handlePrevImage}
            />
            <FontAwesomeIcon
              icon={faAngleRight}
              className="bg-gray-100 p-4 rounded-md cursor-pointer"
              onClick={handleNextImage}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
