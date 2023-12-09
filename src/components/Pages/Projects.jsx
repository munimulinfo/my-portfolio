/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../../assets/images/project/agency.png";
import project2 from "../../assets/images/project/Toy MarketPlace.png";
import project3 from "../../assets/images/project/Esatman School.png";
import project4 from "../../assets/images/project/child care.png";
import project5 from "../../assets/images/project/WowJobs.png";
import project6 from "../../assets/images/project/Edubin.png";
import project7 from "../../assets/images/project/Job-Stack.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import Header from "../utility/Header";
import LazyLoad from "react-lazy-load";
// aso animation
import Aos from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const projects = [
    {
      img: project1,
      name: "Brolelle Agency",
      github_link: "https://github.com/Yeakub1/Borlelle-agency",
      live_link: "https://brolelle.web.app/",
      technoaly: "react js, node js, express js, mongoDB",
    },
    {
      img: project2,
      name: "Toy MarketPlace",
      github_link: "https://github.com/Yeakub1/toy-marketplace",
      live_link: "https://toysite1.web.app/",
    },
    {
      img: project3,
      name: "Esatman School",
      github_link: "https://github.com/Yeakub1/eastman-client",
      live_link: "https://esatman-school.web.app/",
    },
    {
      img: project4,
      name: "Child Care",
      github_link: "https://github.com/Yeakub1/child-care",
      live_link: "https://child-care1.netlify.app/",
    },
    {
      img: project5,
      name: "Wow Jobs",
      github_link: "https://github.com/Yeakub1/wow-jobs",
      live_link: "https://benevolent-melomakarona-58637c.netlify.app/",
    },
    {
      img: project6,
      name: "Edubin School",
      github_link: "https://github.com/Yeakub1/edubin",
      live_link: "https://edubin-edu.web.app/",
    },
    {
      img: project7,
      name: "Job Stack",
      github_link: "https://github.com/Yeakub1/job-stack",
      live_link: "https://jobstack-2f0c7.web.app/",
    },
  ];
  return (
    <section id="project" className="py-10 bg-[#190128] text-white pt-20">
      <Header main={"My"} header={"Projects"} title={"My Awesome Projects"} />
      <div
        data-aos="zoom-in-up"
        className="flex max-w-7xl gap-6 px-5 mx-auto items-center relative"
      >
        <Swiper
          slidesPerview={3}
          spaceBetween={30}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
        >
          {projects.map((project_info, i) => (
            <SwiperSlide key={i}>
              <div className="h-fit w-full p-4 my-10 bg-[#151030] rounded-xl">
                <LazyLoad>
                  <img
                    draggable="false"
                    src={project_info.img}
                    alt=""
                    className="rounded-lg cursor-pointer h-52 w-full"
                  />
                </LazyLoad>

                <h3 className="text-xl my-4 font-bold">{project_info.name}</h3>

                <div className="flex">
                  <a
                    href={project_info.github_link}
                    target="_blank"
                    type="button"
                    class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-5"
                  >
                    Github
                  </a>
                  <a
                    href={project_info.live_link}
                    target="_blank"
                    type="button"
                    class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-5"
                  >
                    Live Demo
                  </a>
                </div>
                <p>{project_info.technoaly}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;
