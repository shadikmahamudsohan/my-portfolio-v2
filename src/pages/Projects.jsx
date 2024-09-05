import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import projects from "../data/ProjectsData";
import SingleProject from "../components/SingleProject";
import Card from "../components/ui/Card";
import { useLocation } from "react-router-dom";

const boxVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.8, duration: 1 },
  },
};
const Projects = () => {
  const ref = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="relative" ref={ref}>
      <Card className="sticky top-10 left-0 pt-[10px] pb-[20px] card text-center text-primary text-xl font-bold z-10 bg-neutral bg-clip-padding bg-opacity-40 border border-primary mb-14 px-5">
        <h1>My Projects</h1>
        <motion.div
          style={{ scaleX }}
          className="h-[8px] bg-primary rounded-lg shadow-xl"
        ></motion.div>
      </Card>
      <motion.div
        variants={boxVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={boxVariants}>
            <SingleProject
              key={project.id}
              name={project.name}
              image={project.image}
              description={project.description}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
