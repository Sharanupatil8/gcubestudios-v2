import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className=" bg-footer-img">
      <div className="max-w-6xl mx-auto px-4 md:px-4 lg:px-8 py-8 md:py-12 lg:py-16">
        <motion.div
          className="grid lg:grid-cols-3 md:grid-cols-2 items-start justify-between lg:space-x-12 text-white py-12 border-b border-gray-100"
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-2xl font-medium mb-3  border-slate-200 pb-2">
              Visit us at :
            </p>
            <a href="/" className="text-md ">
              2nd FLOOR, Maruthi Complex, 1139, <br /> 60 Feet Rd, BEML Layout,{" "}
              <br />
              Rajarajeshwari Nagar, Bengaluru,
              <br /> Karnataka 560098
            </a>
          </div>
          <div>
            <p className="text-2xl font-medium mb-4  pb-2">
              Quick Contact Links :
            </p>
            <div className="flex space-y-3 flex-col">
              <div className="flex space-x-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-slate-200 pt-1"
                />
                <a className="" href="mailto:marketing@theinsightsolutions.in">
                  marketing@theinsightsolutions.in
                </a>
              </div>
              <div className="flex space-x-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-slate-200 pt-1"
                />
                <a className="" href="tel:9035317499">
                  +91 90353 17499
                </a>
              </div>
              <div className="flex space-x-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-slate-200 pt-1"
                />
                <a className="" href="tel:7892999258">
                  +91 78929 99258
                </a>
              </div>
              <div className="flex space-x-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-slate-200 pt-1"
                />
                <a className="" href="tel:9019789174">
                  +91 90197 89174
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-2xl font-medium mb-4   pb-2">
              Connect With Us :
            </p>
            <div className="flex   space-x-4 md:space-x-8  mt-4">
              {/* Facebook Icon */}

              <a
                href="https://www.instagram.com/gcubestudios"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
              </a>
              <a href="/" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faFacebook} className="text-3xl" />{" "}
                <span></span>
              </a>

              <a href="/" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
              </a>

              <a
                href="https://maps.app.goo.gl/agbFiT8DvLMqkZL26"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGoogle} className="text-3xl" />
              </a>
            </div>
          </div>
        </motion.div>
        <p className="text-center pt-3 text-slate-100 opacity-85">
          {" "}
          &copy; {year} all right reserved by the insight solutions
        </p>
      </div>
    </footer>
  );
}

export default Footer;
