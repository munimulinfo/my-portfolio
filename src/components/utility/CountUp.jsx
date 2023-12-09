import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";


const CountUps = () => {
  const [countOn, setCountOn] = useState(false);
  return (
    <div className="flex md:justify-normal justify-center gap-10 mt-12">
      <div className="text-center">
        <h1 className="text-[#0788FF] font-bold md:text-3xl text-xl">
          Front-End
        </h1>
        <ScrollTrigger
          className="md:text-3xl text-xl font-bold"
          onEnter={() => setCountOn(true)}
          onExit={() => setCountOn(false)}
        >
          {countOn && <CountUp start={0} end={63} duration={5} delay={0} />}+
        </ScrollTrigger>
      </div>

      <div className="text-center">
        <h1 className="text-[#0788FF] font-bold md:text-3xl text-xl">
          Mern-stack
        </h1>
        <ScrollTrigger
          className="md:text-3xl text-xl font-bold"
          onEnter={() => setCountOn(true)}
          onExit={() => setCountOn(false)}
        >
          {countOn && <CountUp start={0} end={22} duration={3} delay={0} />}+
        </ScrollTrigger>
      </div>

      <div className="text-center">
        <h1 className="text-[#0788FF] font-bold md:text-3xl text-xl">
          Total Project
        </h1>
        <ScrollTrigger
          className="md:text-3xl text-xl font-bold"
          onEnter={() => setCountOn(true)}
          onExit={() => setCountOn(false)}
        >
          {countOn && <CountUp start={0} end={85} duration={3} delay={0} />}+
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default CountUps;
