import React from "react";
import HeadingSecondary from "./SecondaryHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const words = ["Words", "from", "Our", "Clients"];

const googleReviews = [
  {
    name: "S Krishnamurthy",
    image: "assets/icons/subbu.png",
    reviewText:
      "G Cube Studios folks were very thorough and professional. They clearly understood my requirements and translated them into a quote with  reasonable pricing...",
    reviewLink: "https://maps.app.goo.gl/7qXMhP4nfMYWeSZR9",
    stars: 5,
  },
  {
    name: "Vinod Dev",
    image: "assets/icons/vinod.png",
    reviewText:
      "G Cube Studios folks were very thorough and professional. They clearly understood my requirements and translated them into a quote with  reasonable pricing...",
    reviewLink: "https://maps.app.goo.gl/KPmyiY4gLKLbZ3dp6",
    stars: 5,
  },
  {
    name: "Sharanu P",
    image: "assets/icons/subbu.png",
    reviewText:
      "Highly recommend. Their team is creative and customer-friendly, delivering exceptional design work with flawless execution.",
    reviewLink: "https://g.co/kgs/oi4TdBT",
    stars: 5,
  },
  {
    name: "Spoorthy V C",
    image: "assets/icons/subbu.png",
    reviewText:
      "It was a nice experience to associate with Gcube studios. The design team demonstrated, creativity, attention to detail helped me to turning my vision into reality. Thank you team",
    reviewLink: "https://g.co/kgs/cdV2FRr",
    stars: 5,
  },
];

function Testimonials() {
  return (
    <section className="container max-w-6xl  mx-auto px-2 md:px-4 lg:px-8 py-8 md:py-12 lg:py-16">
      <HeadingSecondary words={words} />
      <motion.div
        className="flex flex-col md:flex-row space-y-6 md:space-y-0 items-center justify-between"
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <div className="flex items-center space-x-3 mb-0">
            <img
              src="assets/icons/google.png"
              alt="google icon"
              className="w-24 h-24 object-cover"
            />
            <p className="text-2xl font-medium">Reviews</p>
          </div>
          <div className="-mt-6 flex items-center space-x-1">
            <p>5.0</p>{" "}
            {Array.from({ length: 5 }, (_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                style={{ color: "#FFD700" }}
              />
            ))}
            <p>(10 Reviews)</p>
          </div>
        </div>
        <div>
          <a
            href="https://g.page/r/CX3nKHo9aU_XEB0/review"
            className="bg-red-600 px-4 py-2 text-white font-medium hover:bg-red-800 duration-75 ease-linear shadow-sm"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faStar} className="pe-1" /> Leave A Review
          </a>
        </div>
      </motion.div>
      <motion.div
        className="py-8 md:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-0 md:gap-x-12 lg:gap-x-8 gap-y-4 md:gap-y-0"
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
        {googleReviews.map((review) => (
          <div className="card bg-gray-100 p-5 rounded-md shadow-md">
            <div className="flex space-x-4 items-center">
              <img
                src={review.image}
                alt="google business reviews for g cube studios"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p>{review.name}</p>
                <div className="flex space-x-2 ">
                  {Array.from({ length: review.stars }, (_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      style={{ color: "#FFD700" }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className=" mt-4 review-clamp">{review.reviewText}</p>
            <a href={review.reviewLink} target="_blank" rel="noreferrer">
              Read ...
            </a>
          </div>
        ))}
      </motion.div>
      <div className=" flex justify-center w-full">
        <a
          href="https://g.page/r/CX3nKHo9aU_XEB0/review"
          className="bg-red-600 px-4 py-2 text-white font-medium hover:bg-red-800 duration-75 ease-linear shadow-sm inline-block"
          rel="noreferrer"
          target="_blank"
        >
          Read All Reviews &rarr;
        </a>
      </div>
    </section>
  );
}

export default Testimonials;
