import { FaGithub } from "react-icons/fa";
import Reveal from "./ui/Reveal";

import { motion } from "framer-motion";
import Card from "./ui/Card";

// eslint-disable-next-line react/prop-types
const SingleProject = ({ name, image, description, liveLink, githubLink }) => {
  return (
    <Card className="card bg-neutral bg-clip-padding bg-opacity-60 border border-primary">
      <figure>
        <div className="h-full mt-5 p-5 lg:mt-0 max-h-[500] lg:h-[300px] overflow-hidden">
          <Reveal delay={1.0}>
            <motion.img
              className="w-full object-cover cursor-grab round-xl"
              src={image}
              alt=""
              whileHover={{ scale: 1.5 }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.5}
              dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
            />
          </Reveal>
        </div>
      </figure>
      <div className="card-body">
        <Reveal delay={1.3}>
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{description}</p>
        </Reveal>
        <div className="card-actions mt-3 justify-end">
          <Reveal delay={1.6}>
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </Reveal>
          <Reveal delay={1.9}>
            <div className="card-actions justify-end mt-5">
              <a href={githubLink} className="btn btn-outline btn-secondary">
                <FaGithub className="mr-2" /> GitHub
              </a>
              <a href={liveLink} className="btn btn-primary ml-2">
                Live Demo
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </Card>
  );
};

export default SingleProject;
