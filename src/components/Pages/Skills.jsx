import React, { useEffect } from "react";
import Lottie from "lottie-react";
import banner from "../../assets/images/skill.json";
import Skill from "../utility/Skills";
import Header from "../utility/Header";
// aso animation
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div id="skill" className="bg-[#190128] text-white pt-20">
      <Header main={"My"} header={"Skills"} />
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-10 justify-center items-center ">
        <div className="">
          <Lottie className="md:h-96" animationData={banner} loop={true} />
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="order-first md:order-last"
        >
          <div className="grid grid-cols-2 lg:grid-cols-3 items-center gap-5">
            <Skill title={"HTML5"} />
            <Skill title={"CSS3"} />
            <Skill title={"Javascript"} />
            <Skill title={"React"} />
            <Skill title={"Tailwind"} />
            <Skill title={"Bootstrap"} />
            <Skill title={"Next.js"} />
            <Skill title={"Node.js"} />
            <Skill title={"Express.js"} />
            <Skill title={"MongoDB"} />
            <Skill title={"Firebase"} />
            <Skill title={"Figma"} />
            <Skill title={"Git"} />
            <Skill title={"Vercel"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
