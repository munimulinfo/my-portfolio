/* eslint-disable no-unused-vars */
import React from "react";
import photos from "../../assets/images/photo/Untitled_design__3_-removebg-preview.png";
import CountUps from "../utility/CountUp";

const AboutMe = () => {
  return (
    <div id="about" className="bg-[#190128] pt-10 pb-10 text-white">
      <div className="max-w-7xl px-5 mx-auto bg-[#190128] ">
        <div className="md:flex gap-10 justify-between">
          <div className="md:w-4/12 mt-16 md:mt-0">
            <img src={photos} alt="my Photo" draggable="false" />
          </div>
          <div className="md:w-8/12">
            <h1 className="text-3xl md:mt-0 mt-24 font-semibold mb-10">
              About Me
            </h1>
            <p className="text-lg">
              Hello, i’m Munimul! During my 1 year of experience as a Junior
              Mern Stack Developer, I have learned a wide variety of Front-end
              technologies, including HTML, CSS, Javascript, and a few popular
              frameworks, such as Bootstrap, Tailwind CSS, and React.js, as well
              as some back-end technologies, such as Node.js, express.js, and
              MongoDB. I finished some full-stack projects that I include on my
              resume. Also, I have experience in responsive web design and
              single-page applications. I excel at teamwork and communication
              skills.
            </p>
            <CountUps />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
