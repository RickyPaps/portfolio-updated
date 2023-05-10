import React from "react";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCirecle from "./BackgroundCirecle";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hello, there! I'm Riccardo Papini",
      "Guy who loves Football.exe",
      "<But loves to develop more />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-10 items-center justify-center text-center overflow-hidden">
      <BackgroundCirecle />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="/temp.jpg"
        width={100}
        height={100}
        alt="hero-image"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Front-End Developer
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7ABOA" />
        </h1>

        <div className="pt-5">
          <Link href={"#about"}>
            <button className="heroButton">About</button>
          </Link>
          <Link href={"#experience"}>
            <button className="heroButton">Experience</button>
          </Link>

          <Link href={"#skills"}>
            <button className="heroButton">Skills</button>
          </Link>

          <Link href={"#projects"}>
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
