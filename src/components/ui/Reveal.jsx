import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Reveal = ({
  children,
  width = "fit-content",
  delay: delaing,
  padding = "0",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const appearingDelay = 0.26 + Number(delaing);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width,
        overflow: "hidden",
        padding,
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: appearingDelay }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn", delay: delaing }}
        // style={{ width }}
        className="absolute top-5 bottom-0 left-0 right-0 z-20 bg-primary"
      ></motion.div>
    </div>
  );
};

export default Reveal;
