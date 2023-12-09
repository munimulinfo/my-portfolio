import React from "react";
import Banner from "./Banner";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import GoToTop from "../Shared/GoToTop";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutMe />
      <Services/>
      <Skills />
      <Projects />
      <Contact />
      <GoToTop />
    </div>
  );
};

export default Home;
