import React from "react";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";

type Props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer overflow-x:hidden">
      <motion.img
        initial={
          isMobile
            ? { x: directionLeft ? -50 : 50, opacity: 0 }
            : { x: directionLeft ? -200 : 200, opacity: 0 }
        }
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        src="/temp.jpg"
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:h-32 xl:w-32 
                   filter md:h-28 group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-200 
                   ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:h-32 xl:w-32 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
