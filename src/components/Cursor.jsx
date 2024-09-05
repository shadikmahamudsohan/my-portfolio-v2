import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <motion.div
        className="bg-primary blur-3xl w-[500px] h-[500px] rounded-full fixed -z-20"
        animate={{ x: position.x + -250, y: position.y + -250 }}
      ></motion.div>
      <div className="w-[100vw] h-[100vh] fixed top-0 flex flex-wrap">
        {Array.from({ length: 150 }, (_, index) => (
          <div
            key={index}
            className="flex-grow flex-shrink-0 m-1 basis-[calc(100%/15)] h-[calc(100vh/10)] bg-black blur-sm"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Cursor;
