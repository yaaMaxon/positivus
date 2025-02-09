"use client";

import { motion } from "framer-motion";
import SectionTab from "../SectionTab";
import StarIcon from "@assets/icons/star.svg";
import LineIcon from "@assets/icons/line.svg";
import CurvedLineIcon from "@assets/icons/curvedLine.svg";
import { ourJourney } from "@/app/constants/titleSectionSettings";
import { ourJourneyList } from "@/app/constants/OurJourneySettings";

const OurJourney = () => {
  return (
    <div>
      <SectionTab
        title={ourJourney.title}
        description={ourJourney.description}
        wrapperClassName="mb-10 lg:mb-[140px]"
        descriptionClassName="lg:max-w-[459px]"
      />
      <div className="relative">
        <LineIcon className="lg:hidden absolute h-full left-[48px]" />
        <CurvedLineIcon className="hidden lg:block absolute h-full left-[234px]" />
        <ul className="flex flex-col gap-[35px] lg:gap-[70px]">
          {ourJourneyList.map(
            ({ year, title, description, firstIcon, secondIcon }, index) => (
              <li
                key={title}
                // className="lg:flex justify-between lg:-mx-[100px]"
                className={`lg:flex justify-between
                    ${index === 1 && "lg:-ml-[100px]"}
                    ${index === 2 && "lg:-mr-[100px]"}
                    ${index === 0 && "self-start"}
                    ${index === 3 && "self-end"}`}
              >
                <div className="hidden lg:block self-start">
                  {firstIcon && firstIcon}
                </div>
                <div
                  // className="flex flex-col lg:flex-row gap-5 lg:gap-10 items-start lg:items-baseline"
                  className={`flex flex-col lg:flex-row gap-5 lg:gap-10 items-start lg:items-baseline 
                    ${index === 1 && "self-end"}
                    ${index === 2 && "self-start"}`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex items-center gap-[25px] ml-[32px] lg:ml-0"
                  >
                    <StarIcon className="lg:hidden fill-green w-[35px] h-[35px]" />
                    <span className="text-[43px] lg:text-6xl font-medium">
                      {year}
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex items-baseline lg:items-start gap-5 p-10 bg-dark rounded-[45px] lg:max-w-[600px]"
                  >
                    <div>
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          ease: "easeInOut",
                        }}
                      >
                        <StarIcon className="fill-green w-[18px] lg:w-[35px] h-[18px] lg:h-[35px]" />
                      </motion.div>
                    </div>
                    <div className="flex flex-col gap-5">
                      <span className="text-white text-[26px] lg:text-3xl">
                        {title}
                      </span>
                      <p className="text-white lg:text-lg">{description}</p>
                    </div>
                  </motion.div>
                </div>
                <div className="hidden lg:block self-end">
                  {secondIcon && secondIcon}
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default OurJourney;
