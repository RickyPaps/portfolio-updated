import React from "react";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, key) => (
          <div key={key} className="w-screen flex-shrink-0 snap-center">
            <img src="/temp.jpg" alt="project-img" />
            <div>
              <h4> Case Study 1 of 3: Project Name</h4>
            </div>
          </div>
        ))}
        {/* project */}
        {/* project */}
        {/* project */}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/20 left-0 h-[500px] -skew-y-12" />
    </div>
  );
};

export default Projects;
