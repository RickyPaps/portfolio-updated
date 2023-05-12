import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";


const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white  h-screen snap-y snap-mandatory overflow-x-hidden overflow-scroll z-0">
      <Head>
        <title>Riccardo Papini Portfolio Site</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
};

export default Home;
