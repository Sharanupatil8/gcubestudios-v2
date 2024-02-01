import React, { useState } from "react";
import HeadingSecondary from "./SecondaryHeading";
import { motion } from "framer-motion";
import DescriptionText from "./DescriptionText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const words = ["Explore", "Our", "Interior", "Services"];

function OurServices() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="our-services-bg">
        <section
          id="our-services"
          className="container max-w-6xl mt-12 mx-auto px-2 md:px-4 lg:px-8 py-8  md:py-12 lg:py-16 "
        >
          <HeadingSecondary words={words} />
          <DescriptionText
            text={"Designing Interiors That Leave a Lasting Impression"}
            linkText={"services"}
          />

          <motion.div
            className="flex flex-col md:flex-row md:justify-between md:items-center mt-4 md:mt-8 space-y-2 md:space-y-0 "
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <ul className="flex space-y-2 flex-col">
              <li className="flex space-x-2 items-center">
                <span className="">
                  <FontAwesomeIcon
                    className="text-red-500 me-2"
                    icon={faPlus}
                  />
                </span>{" "}
                Saloon / Spa Interiors
              </li>
              <li className="flex space-x-2 items-center">
                <span className="">
                  <FontAwesomeIcon
                    className="text-red-500 me-2"
                    icon={faPlus}
                  />
                </span>
                Home Interiors
              </li>
              <li className="flex space-x-2 items-center">
                <span className="">
                  <FontAwesomeIcon
                    className="text-red-500 me-2"
                    icon={faPlus}
                  />
                </span>
                Restaurant and Cafe Interiors
              </li>
            </ul>
            <ul className="flex space-y-2 flex-col">
              <li className="flex space-x-2 items-center">
                <span className="">
                  <FontAwesomeIcon
                    className="text-red-500 me-2"
                    icon={faPlus}
                  />
                </span>
                Gym Interiors
              </li>
              <li className="flex space-x-2 items-center">
                <span className="">
                  <FontAwesomeIcon
                    className="text-red-500 me-2"
                    icon={faPlus}
                  />
                </span>
                Play School Interiors
              </li>
              <li className="flex space-x-2 items-center">
                <span className="">
                  <FontAwesomeIcon
                    className="text-red-500 me-2"
                    icon={faPlus}
                  />
                </span>
                Office Interiors
              </li>
            </ul>
            <ul className="flex space-y-2 flex-col">
              <li className="flex space-x-2 items-center">
                <span className="">
                  <FontAwesomeIcon
                    className="text-red-500 me-2"
                    icon={faPlus}
                  />
                </span>
                Commercial/Residential Interiors
              </li>
              <li className="flex space-x-2 items-center">
                <span className="">
                  <FontAwesomeIcon
                    className="text-red-500 me-2"
                    icon={faPlus}
                  />
                </span>
                Clinic Interiors
              </li>
              <li className="flex space-x-2 items-center">
                <span className="">
                  <FontAwesomeIcon
                    className="text-red-500 me-2"
                    icon={faPlus}
                  />
                </span>
                All Types Of Interiors
              </li>
            </ul>
          </motion.div>
          <div className="flex flex-col sm:flex-row justify-between  md:space-x-4">
            <div className="mt-8 md:mt-12">
              <p className="text-3xl md:text-8xl  border-b border-gray-500 pb-2 inline-block">
                {counterOn && <CountUp start={0} end={98} duration={3} />}%
              </p>
              <p className="mt-3">Happy Clients Around Bangalore</p>
            </div>
            <div className="mt-8 md:mt-12">
              <p className="text-3xl md:text-8xl   border-b border-gray-500 pb-2 inline-block">
                {counterOn && <CountUp start={0} end={100} duration={3} />}+
              </p>
              <p className="mt-3">Projects Completed</p>
            </div>
            <div className="mt-8 md:mt-12">
              <p className="text-3xl md:text-8xl    border-b border-gray-500 pb-2 inline-block">
                {counterOn && <CountUp start={0} end={100} duration={3} />}k+
              </p>
              <p className="mt-3">Square Feet</p>
            </div>
          </div>
        </section>
      </div>
    </ScrollTrigger>
  );
}

export default OurServices;
