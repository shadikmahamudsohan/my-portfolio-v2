import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

// eslint-disable-next-line react/prop-types
const Card = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={mainControls}
      variants={variants}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
