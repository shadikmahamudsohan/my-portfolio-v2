import Reveal from "./ui/Reveal";

const Hero = () => {
  return (
    <div className="hero  min-h-full">
      <div className="hero-content text-center">
        <div className="text-center py-20">
          <Reveal delay="0.5">
            <h1 className="text-7xl font-bold">Build Your Future with Us</h1>
          </Reveal>
          <Reveal delay="1">
            <h2 className="text-2xl mt-4">
              Innovative solutions for your business
            </h2>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Hero;
