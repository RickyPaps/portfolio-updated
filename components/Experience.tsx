import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const Experience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className="h-screen flex relative overflow-hidden flex-col md:flex-row max-w-full px-10
                 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-[70px] uppercase tracking-[20px] text-gray-500 text-xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 p-10 overflow-x-scroll snap-x snap-mandatory">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default Experience;
