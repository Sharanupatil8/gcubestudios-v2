import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



const HeadingSecondary = ({words}) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger the animation once
    rootMargin: "-50px 0px", // Adjust this margin based on when you want the animation to start
  });

  return (
    <h2 className="heading-secondary" ref={ref}>
      {words.map((word, wordIndex) => (
        <React.Fragment key={wordIndex}>
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{
                delay: inView ? wordIndex * 0.2 + letterIndex * 0.1 : 0,
                duration: 0.5,
              }}
            >
              {letter}
            </motion.span>
          ))}{" "}
        </React.Fragment>
      ))}
    </h2>
  );
};

export default HeadingSecondary;
