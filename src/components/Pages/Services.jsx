import React from "react";
import front from "../../assets/images/front-end.png";
import web from "../../assets/images/web.png";
import mern from "../../assets/images/mern.png";
import { motion } from "framer-motion";
import { fadeIn } from "../utility/variants";

const Services = () => {
 
  return (
    <section id="services" className="py-10 bg-[#190128]  pt-20">
      <div className="max-w-7xl px-5 mx-auto ">
        <div className="md:flex justify-between items-center">
          <div className="md:w-6/12 text-white">
            <h1 className="text-4xl font-bold">
              My Awesome <span className="text-[#0788FF]">Services</span>
            </h1>
            <p className="my-8">
              Web developers bring web designs to life using a variety of
              programming languages, frameworks, and tools.
            </p>
            <p className="my-8">
              Front-end developers focus on the visual and interactive elements
              of the website. They are well versed in technologies like HTML,
              CSS and JavaScript, using these languages and frameworks to create
              engaging user interfaces and seamless user experiences.
            </p>
            <p className="my-8">
              MERN Stack developers are proficient in these technologies, adept
              at handling both front-end and back-end development aspects of a
              web application, making them highly versatile in the web
              development landscape.
            </p>
          </div>
          {/* -------------- */}
          <div className="grid md:grid-cols-2 gap-20 items-center justify-center mt-10 md:mt-0">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="card-1 ">
                <div className="card__content relative">
                  <div className="text-black hero-text-box">
                    <img
                      className="h-20 w-20 m-auto App-logo"
                      src={web}
                      alt="web develper"
                      draggable="false"
                    />
                    <h1 className=" my-3 text-xl font-bold text-center">
                      Web Developer
                    </h1>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ----------------------- */}
            <div className="">
              <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="card-1 ">
                  <div className="card__content relative">
                    <div className="text-black hero-text-box">
                      <img
                        className="h-20 w-20 m-auto App-logo"
                        src={front}
                        alt="front-end developer"
                        draggable="false"
                      />
                      <h1 className=" my-3 text-xl font-bold text-center">
                        Front-End Developer
                      </h1>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="card-1 mt-20 w-full">
                  <div className="card__content relative ">
                    <div className="text-black hero-text-box">
                      <img
                        className="h-20 w-20 m-auto App-logo"
                        src={mern}
                        alt="mern-stack developer"
                        draggable="false"
                      />
                      <h1 className=" my-3 text-xl font-bold text-center">
                        Mern Stack developer
                      </h1>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
