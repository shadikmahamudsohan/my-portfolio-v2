import { motion } from "framer-motion";
import { imageVariant, textVariant } from "../animation/animationVariants";
import Reveal from "../components/ui/Reveal";

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 p-6">
      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 mb-12">
        <Reveal delay="0.1">
          <img
            src="https://picsum.photos/200"
            alt="Profile"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover"
          />
        </Reveal>
        <div className="text-center md:text-left">
          <Reveal delay="0.3">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
              About Me
            </h1>
          </Reveal>
          <Reveal delay="0.5">
            <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300">
              I am a passionate web developer with experience in building
              dynamic and responsive web applications.
            </p>
          </Reveal>
          <Reveal delay="0.7">
            <button className="mt-6 px-6 py-2 bg-primary text-white rounded-full text-lg md:text-xl hover:bg-primary">
              Resume
            </button>
          </Reveal>
        </div>
      </div>

      {/* Skills Section */}
      <div className="w-full">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-8">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React JS",
            "Next JS",
            "Node JS",
            "Mongoose",
            "Tailwind",
          ].map((skill) => (
            <motion.div
              key={skill}
              className="p-4 bg-gray-200 dark:bg-gray-700 rounded-lg text-center shadow-lg"
              variants={textVariant}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200">
                {skill}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
