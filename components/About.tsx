import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0.1, 0.3, 0.5, 0.8, 1] }}
      transition={{ duration: 3 }}
      className="flex flex-col relative h-screen text-center  
                     max-w-7xl px-10 mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <div className="flex flex-col mt-[80px] md:mt-10 items-center text-cente md:text-left md:flex-row">
        <motion.img
          src="/temp.jpg"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="mb-5 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
                    md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px] md:mt-0"
        />

        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl font-semibold ">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]">little</span>{" "}
            background
          </h4>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis
            nemo neque eveniet ab eligendi atque dolores unde minus reiciendis
            quisquam ratione quae magnam expedita, optio, voluptas praesentium,
            tempore nam. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Autem distinctio fugit praesentium eius optio dolores odit
            atque quibusdam aperiam impedit? Quo porro quaerat eum ad veniam
            deleniti maxime nemo optio.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
