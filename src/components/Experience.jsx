import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import { motion } from "framer-motion";
import { experiences } from "../constantData/data";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{
      background: "#ddd",
      color: "#242736",
      borderRadius: "10px",
    }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{
      background: experience.iconBg,
    }}
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
    <h3 className="text-[#242736] text-[24px] font-bold">
      {experience.title}
    </h3>
    <p className="text-gray-600">{experience.company_name}</p>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <div>
      <div className="relative">
        <h2 className="text-[#242736] text-[24px] md:text-[26.8px] lg:text-[32px] font-bold tracking-wider font-['Space_Grotesk']">
          <span className="block ml-[120px]">A small showcase</span>
          <span className="block">of what I've worked on.</span>
        </h2>
        <p className="absolute top-0 left-0 text-[#ec5c29] text-[14px]">
          EXPERIENCE
        </p>
      </div>

      <motion.div variants={textVariant()} className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </motion.div>
    </div>
  );
};


const WrappedExperience = SectionWrapper(Experience, "work");
export default WrappedExperience;
