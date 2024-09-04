import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Reveal from "../components/ui/Reveal";
import { useRef } from "react";
import Card from "../components/ui/Card";
// import { SiMongoose } from "react-icons/si"; // mongoose

const AboutMe = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className="snapping-section flex items-center justify-center mb-16">
      <Card className="card md:card-side bg-neutral bg-clip-padding bg-opacity-60 border border-primary max-w-[950px]">
        <figure className="p-6" ref={ref}>
          <Reveal delay="1">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="My image"
              className="rounded-xl opacity-90 select-none  h-[200px] md:h-auto"
            />
          </Reveal>
        </figure>
        <motion.div
          style={{ y }}
          className="card-body max-w-[100%] md:max-w-[50%] no-transform "
        >
          <Reveal delay="1.3">
            <h2 className="card-title text-4xl mb-5 sm:mt-5 md:mt-0">
              About Me
            </h2>
          </Reveal>
          <Reveal delay="1.6">
            <p className=" mb-5">
              My name is <strong>Shadik Mahamud</strong>. I am a{" "}
              <strong>full stack web developer</strong>. I have been doing web
              development for <strong>3 years</strong>. I always liked to write
              code and make my imagination come true. I like to work with new
              technologies. I am happy to learn any ting to make a good website.
              I am happy to work with new peoples and help them to make their
              websites.
            </p>
          </Reveal>
          <Reveal delay="1.9">
            <div className="card-actions">
              <button className="btn btn-outline">View Resume</button>
            </div>
          </Reveal>
        </motion.div>
      </Card>{" "}
    </section>
  );
};
const Languages = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const languages = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "Tailwind" },
    { id: 5, name: "React" },
    { id: 6, name: "Node.js" },
    { id: 7, name: "MongoDB" },
    { id: 8, name: "Express.js" },
    { id: 9, name: "Mongoose" },
    { id: 10, name: "Next js" },
  ];

  return (
    <section className="snapping-section flex items-center justify-center">
      <Card className="card md:card-side bg-neutral bg-clip-padding bg-opacity-60 border border-primary max-w-[950px]">
        <motion.div
          style={{ y }}
          className="card-body max-w-[100%] md:max-w-[50%] no-transform"
        >
          <Reveal delay="1.3">
            <h2 className="card-title text-4xl mb-5 sm:mt-5 md:mt-0 ">
              My Languages
            </h2>
          </Reveal>
          <Reveal delay="1.6">
            <div className="flex flex-wrap">
              {languages.map((language) => (
                <p key={language.id} className="p-3 m-3 badge badge-outline">
                  {language.name}
                </p>
              ))}
            </div>
          </Reveal>
        </motion.div>
        <figure className="p-6" ref={ref}>
          <Reveal delay="1">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="My image"
              className="rounded-xl opacity-90 select-none  h-[200px] md:h-auto"
            />
          </Reveal>
        </figure>
      </Card>
    </section>
  );
};
const Tools = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const tools = [
    { id: 1, name: "Git" },
    { id: 2, name: "GitHub" },
    { id: 3, name: "VS Code" },
    { id: 4, name: "Figma" },
  ];

  return (
    <section className="snapping-section flex items-center justify-center">
      <Card className="card md:card-side bg-neutral bg-clip-padding bg-opacity-60 border border-primary max-w-[950px]">
        <figure className="p-6" ref={ref}>
          <Reveal delay="1">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="My image"
              className="rounded-xl opacity-90 select-none  h-[200px] md:h-auto"
            />
          </Reveal>
        </figure>

        <motion.div
          style={{ y }}
          className="card-body max-w-[100%] md:max-w-[50%] no-transform"
        >
          <Reveal delay="1.3">
            <h2 className="card-title text-4xl mb-5 sm:mt-5 md:mt-0 ">
              MY Tools
            </h2>
          </Reveal>
          <Reveal delay="1.6">
            <div className="flex flex-wrap">
              {tools.map((language) => (
                <p key={language.id} className="p-3 m-3 badge badge-outline">
                  {language.name}
                </p>
              ))}
            </div>
          </Reveal>
        </motion.div>
      </Card>
    </section>
  );
};

const About = () => {
  const ref = useRef();

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
      <Card className="sticky top-10 left-0 pt-[10px] pb-[20px] card text-center text-primary text-xl font-bold z-10 bg-neutral bg-clip-padding bg-opacity-40 border border-primary">
        <h1>About Me</h1>
        <motion.div
          style={{ scaleX }}
          className="h-[8px] bg-primary rounded-lg shadow-xl"
        ></motion.div>
      </Card>
      <AboutMe />
      <Languages />
      <Tools />
    </div>
  );
};

export default About;
