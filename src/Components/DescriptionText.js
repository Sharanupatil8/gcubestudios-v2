import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

function DescriptionText({ text, linkText }) {
  return (
    <>
      <div className="col-span-full mb-0 lg:mb-4 mt-8">
        <div className="flex flex-col lg:flex-row items-center  lg:items-center lg:justify-between justify-center">
          <motion.p
            whileInView={{ x: [-100, 0], opacity: [0, 1], type: "stiff" }}
            transition={{ duration: 0.5 }}
            className="heading-description"
          >
            {text}
          </motion.p>
          <Link
            to={`/${linkText}`}
            className="text-red-600 px-3  py-2 font-medium text-lg"
          >
            {linkText} <span className="">&rarr;</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default DescriptionText;
