import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import HeroSocialLinks from "./HeroSocialLinks";
import HeroTextAnimation from "./HeroTextAnimated";

export default function Hero() {
  const [heroImageIndex, setHeroImageIndex] = useState(1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    // Change the hero image every 3 seconds
    const intervalId = setInterval(() => {
      setHeroImageIndex((prevIndex) => (prevIndex % 3) + 1);
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <section className="h-svh relative overflow-hidden w-full">
      <div className="hero absolute top-0 left-0">
        <img
          src={`assets/hero-img-${heroImageIndex}.webp`}
          className={`w-full -z-10 hero-img relative h-full object-cover ${
            isImageLoaded ? "visible" : "invisible"
          }`}
          alt="G Cube Studio "
          onLoad={handleImageLoad}
        />
      </div>

      <div className="container max-w-6xl px-6 left-1/2 -translate-x-1/2 absolute top-1/2 md:-translate-y-1/2 -translate-y-2/4">
        <div className="text-white text-center md:text-start ">
          <HeroTextAnimation />
          <motion.p
            initial={{ y: "-50px", opacity: 0 }}
            animate={{ y: "0", opacity: 1, duration: 300, type: "spring" }}
            className="text-lg mt-8 px-4 md:px-0 md:mt-0 md:w-2/4"
          >
            Interior design strives to make spaces visually appealing and
            enhance well-being and quality of life.
          </motion.p>
        </div>
        <motion.ul
          className="md:hidden text-white text-4xl items-center justify-center mt-12 flex flex-row md:flex-col space-y-0 space-x-6 md:space-x-0 md:space-y-6"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, duration: 500 }}
        >
          <motion.li>
            <a href="/" className="header-social-icons">
              <FontAwesomeIcon
                icon={["fab", "meta"]}
                className="header-social-icons"
              />
            </a>
          </motion.li>
          <motion.li>
            <a
              href="https://www.instagram.com/gcubestudios"
              target="_blank"
              rel="noreferrer"
              className="header-social-icons"
            >
              <FontAwesomeIcon
                icon={["fab", "instagram"]}
                className="header-social-icons"
              />
            </a>
          </motion.li>
          <motion.li>
            <a
              href="https://www.linkedin.com/in/g-cube-the-insight-solutions-7040852a3/"
              target="_blank"
              rel="noreferrer"
              className="header-social-icons"
            >
              <FontAwesomeIcon
                icon={["fab", "linkedin-in"]}
                className="header-social-icons"
              />
            </a>
          </motion.li>
          <motion.li>
            <a
              href="https://maps.app.goo.gl/t6yxHyWf5n3SEwJU7"
              className="header-social-icons"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={["fab", "google"]}
                className="header-social-icons"
              />
            </a>
          </motion.li>
          <motion.li>
            <a
              href="https://www.youtube.com/channel/UC5Wb7qdtLp-Qh6ouBsFKcGw"
              className="header-social-icons"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={["fab", "youtube"]}
                className="header-social-icons"
              />
            </a>
          </motion.li>
        </motion.ul>
      </div>
      <a
        href="#design-philosophy"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-scroll-icon rounded-full animate-bounce  h-16 w-16 px-4 py-5"
      >
        <FontAwesomeIcon
          icon={faAngleDown} // Use the imported icon directly
          className="h-8 w-8 text-white"
        />
      </a>

      <HeroSocialLinks />

      <div className="w-full backdrop-blur-md">
        <Navbar />
      </div>
    </section>
  );
}
