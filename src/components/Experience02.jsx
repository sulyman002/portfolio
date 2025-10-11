import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constantData/data.js";

import SectionWrapper from "../hoc/SectionWrapper.jsx";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#F5F5F5",
        color: "#242736",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #F5F5F5" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[#24273] text-[24px] font-bold">
          {experience.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className=" text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience02 = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="relative">
          <h2 className="text-[#242736] text-[24px] md:text-[26.8px] lg:text-[32px] font-600 font-bold tracking-wider font-['Space_Grotesk']">
            <span className="block ml-[120px]">A glimpse into</span>
            <span className="block">my professional experience.</span>
          </h2>
          <p className="absolute top-0 left-0 text-[#ec5c29] text-[14px]">
            Work
          </p>
        </div>
      </div>

      <div className="mt-20 flex  flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

const Experience2 = SectionWrapper(Experience02, "work");

export default Experience2;
