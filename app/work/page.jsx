"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { useEffect } from "react";


import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Chest X-Ray Disease Classification",
    title: "project 1",
    description:
      "A deep learning project that leverages a Convolutional Neural Network (CNN) to analyze chest X-ray images and detect lung and cardiac conditions. Designed to assist in automated medical diagnosis, this model enhances accuracy and efficiency in radiology.",
    stack: [{ name: "PyTorch" }, { name: "React.js" }, { name: "Javascript" }],
    images: [
      "/assets/work/Image13.png",
      "/assets/work/Image14.png",
      "/assets/work/Image15.png",
      "/assets/work/Image16.png",
      "/assets/work/Image17.png",
    ],
    live: "",
    github: "https://github.com/harrisonchiu/xray/tree/main",
  },
  {
    num: "02",
    category: "TripTogether",
    title: "project 2",
    description:
      "TripTogether is a rapidly built carpooling application designed in just two days. It enables users of a fictional taxi service to offer rides, scan QR codes to join carpools, and split fares dynamically as more passengers join.",
    stack: [{ name: "Flutter(Dart)" }, { name: "Firebase" }, { name: "Google Maps API" }],
    images: [
      "/assets/work/Image2.png",
      "/assets/work/Image3.png",
      "/assets/work/Image4.png",
      "/assets/work/Image5.png",
      "/assets/work/Image6.png",
      "/assets/work/Image7.png",
    ],
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "TouchdownTalent",
    title: "project 3",
    description:
      "TouchdownTalent is a web application that provides NFL player stats, team standings, and trending news. Built with a custom API and dynamic UI, it allows users to explore player data and team performance in an intuitive way.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }, { name: "Express.js" },],
    images: [
      "/assets/work/Image8.png",
      "/assets/work/Image9.png",
      "/assets/work/Image10.png",
      "/assets/work/Image11.png",
    ],
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0] );

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };
useEffect(() => {
  setTimeout(() => {
    const swiper = document.querySelector(".mySwiper")?.swiper;
    if (swiper) {
      swiper.params.navigation.prevEl = ".custom-prev";
      swiper.params.navigation.nextEl = ".custom-next";
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, 500); // Slight delay to ensure elements exist
}, []);
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {/* <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}
                {/* github project button */}
                {/* <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
          {/* Outer Swiper - Controls Projects */}
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="relative flex justify-center items-center w-full h-auto min-h-[500px]">


                  {/* Inner Swiper - Controls Images */}
                    <Swiper
                      spaceBetween={10}
                      slidesPerView={1}
                      navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                      }}
                      pagination={{ clickable: true }}
                      modules={[Navigation]}
                      className="w-full"
                    >
                      {project.images.map((img, imgIndex) => (
                        <SwiperSlide key={imgIndex}>
                          <div className="relative flex justify-center items-center w-full h-[500px]">
                            <Image 
                              src={img} 
                              width={800} 
                              height={400} 
                              className="rounded-lg w-full h-full object-contain"
                              alt={`Project image ${imgIndex + 1}`} 
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                       {/* Custom Navigation Buttons */}
                      <button className="custom-prev absolute left-1 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/50 p-3 rounded-full">
                        ◀
                      </button>
                      <button className="custom-next absolute right-1 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/50 p-3 rounded-full">
                        ▶
                      </button>
                    </Swiper>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
