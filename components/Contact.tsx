import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div
      className="h-screen relative flex flex-col items-center overflow-hidden md:flex-row max-w-full
                    mx-auto justify-evenly"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
    </div>
  );
};

export default Contact;
