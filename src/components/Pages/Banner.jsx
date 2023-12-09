/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Lottie from "lottie-react";
import banner from "../../assets/images/photo/Untitled_design-removebg-preview.png";
import Typewriter from "typewriter-effect";
import { BsArrowDownCircle } from "react-icons/bs";
import Resume from "../../assets/images/photo/Mern-resume.pdf";
import Wish from "../utility/Wish";
import Scroll from "../utility/Scroll";
const Banner = () => {
  return (
    <div id="banner" className="bg-[#190128] text-white">
      <div className="max-w-7xl px-5 mx-auto grid md:grid-cols-2 gap-10 justify-center items-center max-h-screen">
        <div className="">
          <Wish />
          <div className="banner-text">
            <h1 className="md:text-5xl text-3xl font-bold mb-7 ">
              Hello, It's Me Munimul
            </h1>
          </div>
          <h1 className="md:text-5xl text-3xl">
            I'm a
            <h1 className="text-[#0788FF] font-bold">
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "Front-End Developer",
                    "Mern Stack Developer",
                    "React Developer",
                    "Node.js Developer ",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </h1>
          <p className="mt-9 text-xl ">
            I am a Mern Stack developer is proficient in working with both
            front-end and back-end coding languages.
          </p>
          <div className="mt-5">
            <a
              href={Resume}
              download="Yeakub Resume"
              className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative flex items-center gap-3 text-white text-lg">
                Download Resume <BsArrowDownCircle />
              </span>
            </a>
          </div>
        </div>
        <div className="md:p-14">
          <img src={banner} alt="logo" />
          {/* <Lottie animationData={banner} loop={true} /> */}
        </div>
      </div>
      <div className="pb-20">
        <Scroll />
      </div>
    </div>
  );
};
export default Banner;
