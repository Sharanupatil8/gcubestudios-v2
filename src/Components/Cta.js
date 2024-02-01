import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import React from "react";

function Cta(props) {
  return (
    <section className="my-5 py-5 md:py-16">
      <div className="container max-w-6xl mx-auto py-8 rounded-md bg-black px-4 md:px-8 lg:px-16">
        <motion.div
          className="grid grid-cols-1  lg:grid-cols-2 gap-x-0 md:gap-x-8 py-4 md:py-12 gap-y-8 lg:gap-y-0  "
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <div className="">
            <button className="text-white bg-gray-900 px-3 py-2 rounded-md">
              Custom Design
            </button>
            <h3 className="mt-4 md:mt-12 text-white text-3xl md:text-5xl  lineheightnormal tracking-[-0.4px] font-bold">
              Create your own design and let us make it happen.
            </h3>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row text-white mt-8 space-x-0 md:space-x-8 mb-8">
              <ul className="flex flex-col space-y-4 ">
                <li className="flex items-center text-md">
                  <span className="bg-red-800 text-md px-2 rounded-sm  me-2">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  Personalized aesthetics
                </li>
                <li className="flex items-center text-md">
                  <span className="bg-red-800 text-md px-2 rounded-sm  me-2">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  25% Extra Space
                </li>
                <li className="flex items-center text-md">
                  <span className="bg-red-800 text-md px-2 rounded-sm  me-2">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  Increased property value
                </li>
              </ul>
              <ul className="flex flex-col space-y-4">
                <li className="flex items-center text-md">
                  <span className="bg-red-800 text-md px-2 rounded-sm  me-2">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  Expert knowledge
                </li>
                <li className="flex items-center text-md">
                  <span className="bg-red-800 text-md px-2 rounded-sm  me-2">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  Efficient installation
                </li>
                <li className="flex items-center text-md">
                  <span className="bg-red-800 text-md px-2 rounded-sm  me-2">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  Free Service Warranty
                </li>
              </ul>
            </div>
            <button
              className="bg-red-700 hover:bg-white hover:text-red-900 font-medium text-white text-lg px-4 rounded-md   hover:shadow-red-700 shadow-sm py-2"
              onClick={() => props.setIsModalOpen(true)}
            >
              Get Free Quote Now
            </button>
          </div>
          <div className="flex space-x-4 lg:space-x-0  lg:relative px-3 md:px-0 ">
            <img
              src="assets/kitchen-1.jpg"
              alt="kitchen interior design by G Cube Studios Interior Designers in Bangalore"
              className="w-2/4 lg:w-full border-2 rounded-md border-white object-cover lg:absolute lg:-top-32 lg:h-3/4 "
            />
            <img
              src="assets/bedroom-1.jpg"
              alt="kitchen interior design by G Cube Studios Interior Designers in Bangalore"
              className="w-2/4 lg:w-full border-2 rounded-md border-white object-cover lg:absolute lg:-bottom-32 lg:h-3/4  ml-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Cta;
