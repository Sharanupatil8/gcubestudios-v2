import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function Direction() {
  return (
    <motion.div
      className="w-full bg-gray-900 my-8 md:my-12 py-4 md:py-12 md:px-8 rounded-md"
      whileInView={{ y: [100, 50, 0], opacity: [0.2, 0.5, 1] }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row space-x-8 ">
        <div className="w-full md:w-1/3 bg-gray-800 shadow-md text-white p-4 md:p-6">
          <div className="flex  space-x-3 mb-4 md:mb-6">
            <div>
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-white text-base p-2 bg-red-500 rounded-sm"
              />
            </div>
            <p className="text-base">
              2nd Floor, Maruthi Complex, 1139, 60 Feet Rd, BEML Layout,
              Rajarajeshwari Nagar, Bengaluru, Karnataka 560098
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="flex space-x-3">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-white text-base p-2 bg-red-500 rounded-sm"
              />
              <a className="inline-block" href="tel:9035317499">
                +91 90353 17499
              </a>
            </div>
            <div className="flex space-x-3 items-center">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-white text-base p-2 bg-red-500 rounded-sm"
              />
              <a className="" href="tel:7892999258">
                +91 78929 99258
              </a>
            </div>
            <div className="flex md:space-x-3 items-center">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-white text-base p-2 bg-red-500 rounded-sm"
              />
              <a className="" href="tel:9019789174">
                +91 90197 89174
              </a>
            </div>
            <div className="flex space-x-3 items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-white text-base p-2 bg-red-500 rounded-sm"
              />
              <a className="" href="mailto:marketing@theinsightsolutions.in">
                marketing@theinsightsolutions.in
              </a>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto md:w-3/4">
          <div>
            <iframe
              className=" w-5/6 md:w-full mx-auto"
              title="G cube studios google directions"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8726019783567!2d77.52052119999995!3d12.9159087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ff362d323b7%3A0xd74f693d7a28e77d!2sG%20Cube%20Studios!5e0!3m2!1sen!2sin!4v1704954960065!5m2!1sen!2sin"
              width="90%"
              height="350px"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Direction;
