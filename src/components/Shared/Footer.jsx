/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
// import { BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#190128] text-white ">
      <div className="md:flex justify-between items-center max-w-7xl mx-auto px-5">
        <div className="">
          <h1 className="font-bold text-2xl items-center text-[#0788FF]">
            Munimul
          </h1>
          <p className="mt-3 md:w-2/3">
            Web developers collaborate with designers to bring website layouts
            to life, ensuring seamless user experience and responsive design
            across devices
          </p>
        </div>
        <div className="md:mt-0 mt-8">
          <h1 className="text-2xl font-bold">Media</h1>
          <div className="flex items-center gap-3 text-xl mt-3">
            <a
              href="https://www.linkedin.com/in/munimul-islam/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/munimulinfo" target="_blank">
              <FaGithub />
            </a>

            <a
              href="https://www.facebook.com/monimulhoque.nissan/"
              target="_blank"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center pb-3 mt-10">
        &copy; Copyright 2023. Made by Munimul
      </p>
    </div>
  );
};

export default Footer;
