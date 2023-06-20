import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden 
                flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, key) => (
          <div
            key={key}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-40 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              src="/temp.jpg"
              alt="project-img"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-xl md:text-3xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {key + 1} of {projects.length}
                </span>
                : Project Name
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis quibusdam nemo ipsam ducimus, corporis alias
                praesentium quasi minima necessitatibus at cupiditate dolorum
                blanditiis. Minus facere quaerat accusantium commodi, at porro!
              </p>
            </div>
          </div>
        ))}
        {/* project */}
        {/* project */}
        {/* project */}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/20 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
