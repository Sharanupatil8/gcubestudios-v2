import React from "react";
import { motion } from "framer-motion";

function HowItWorks() {
  return (
    <div className="bg-gray-100">
      <motion.section
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        id="our-services"
        className="container max-w-7xl mt-12 mx-auto px-2 md:px-4 lg:px-8 py-8  md:py-12 lg:py-16 relative "
      >
        <h2 className="text-center text-3xl md:text-6xl text-gray-700 font-bold">
          How It Works
        </h2>
        <div className="h-4  w-5/6  bg-gray-500 hidden lg:block absolute top-60   z-0"></div>

        <div className="h-3/5 top-40 left-2/4  w-4  bg-gray-500 lg:hidden block absolute   z-0"></div>
        <div className="relative flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 items-center mt-12 z-100">
          <div className="bg-white md:p-5 p-3 text-center shadow rounded-md ">
            <img
              src="assets/icons/designer.png"
              alt="designer icon"
              className=" w-16 h-16 block mx-auto mb-3"
            />
            <p className=" text-lg">Meet the designer</p>
            {/* <p className="font-medium text-center mt-1"> Choose your style </p> */}
          </div>
          <div className="bg-white p-4 text-center shadow rounded-md ">
            <img
              src="assets/icons/3d-cube.png"
              alt="3d icon"
              className=" w-16 h-16 block mx-auto mb-3"
            />
            <p className=" text-lg">3D Walkthrough</p>
            {/* <p className="font-medium text-center mt-1"> Design Revisions </p> */}
          </div>
          <div className="bg-white p-4 text-center shadow rounded-md ">
            <img
              src="assets/icons/electronic-ticket.png"
              alt="3d icon"
              className=" w-16 h-16 block mx-auto mb-3"
            />
            <p className="text-lg">Book Your Design</p>
          </div>
          <div className="bg-white p-4 text-center shadow rounded-md ">
            <img
              src="assets/icons/construction.png"
              alt="3d icon"
              className=" w-16 h-16 block mx-auto mb-3"
            />
            <p className="text-lg"> Execution Begins</p>
          </div>
          <div className="bg-white p-4 text-center shadow rounded-md ">
            <img
              src="assets/icons/fast-delivery.png"
              alt="3d icon"
              className=" w-16 h-16 block mx-auto mb-3"
            />
            <p className="text-lg">Ready To Move In</p>
          </div>
        </div>
        <div className="">
          <button className="mt-12 w-auto mx-auto block bg-red-600 px-5 py-3 font-bold text-lg text-white text-center rounded-sm hover:bg-white duration-100 hover:text-red-500">
            Book Your Appointment
          </button>
        </div>
      </motion.section>
    </div>
  );
}

export default HowItWorks;
