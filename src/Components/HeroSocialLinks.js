import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
export default function HeroSocialLinks() {
  const containerVariants = {
    // ... existing containerVariants code
  };

  const iconVariants = {
    // ... existing iconVariants code
  };

  return (
    <div className="hidden md:block md:absolute top-3/4 md:top-1/2 md:-translate-y-1/2 -translate-y-16 right-2/4 translate-x-2/4 xxl:right-52 md:right-10 text-white text-2xl font-bold">
      <motion.ul
        className="flex flex-row md:flex-col space-y-0 space-x-4 md:space-x-0 md:space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.li variants={iconVariants}>
          <a href="/" className="header-social-icons" aria-label="">
            <FontAwesomeIcon
              icon={["fab", "meta"]}
              className="header-social-icons"
              alt=""
            />
          </a>
        </motion.li>
        <motion.li variants={iconVariants}>
          <a
            href="https://www.instagram.com/gcubestudios"
            target="_blank"
            rel="noreferrer"
            className="header-social-icons"
            aria-label=""
          >
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              className="header-social-icons"
              alt=""
            />
          </a>
        </motion.li>
        <motion.li variants={iconVariants}>
          <a
            href="https://www.linkedin.com/in/g-cube-the-insight-solutions-7040852a3/"
            target="_blank"
            rel="noreferrer"
            className="header-social-icons"
            aria-label=""
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin-in"]}
              className="header-social-icons"
              alt=""
            />
          </a>
        </motion.li>
        <motion.li variants={iconVariants}>
          <a
            href="https://maps.app.goo.gl/t6yxHyWf5n3SEwJU7"
            className="header-social-icons"
            target="_blank"
            rel="noreferrer"
            aria-label=""
          >
            <FontAwesomeIcon
              icon={["fab", "google"]}
              className="header-social-icons"
              alt=""
            />
          </a>
        </motion.li>
        <motion.li variants={iconVariants}>
          <a
            href="https://www.youtube.com/channel/UC5Wb7qdtLp-Qh6ouBsFKcGw"
            className="header-social-icons"
            target="_blank"
            rel="noreferrer"
            aria-label=""
          >
            <FontAwesomeIcon
              icon={["fab", "youtube"]}
              className="header-social-icons"
              alt=""
            />
          </a>
        </motion.li>
      </motion.ul>
    </div>
  );
}
