"use client";

import { motion } from "framer-motion";
import StarIcon from "@assets/icons/star.svg";
import ArrowRead from "@assets/icons/arrowRead.svg";
import { successStoryList } from "@/app/constants/SuccessStorySettings";

const SuccessStory = () => {
  return (
    <div className="flex items-baseline lg:items-start gap-[30px] lg:gap-[150px] bg-dark rounded-[45px] px-10 pt-10 pb-[50px] lg:p-[50px]">
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        className="lg:hidden"
      >
        <StarIcon className="fill-green w-[18px] h-[18px]" />
      </motion.div>
      <div className="flex flex-col gap-[25px] lg:gap-[50px] lg:max-w-[521px] ">
        <span className="text-green text-[26px] font-medium lg:hidden">
          FEATURED
        </span>
        <span className="hidden lg:block bg-green rounded-[7px] text-[40px] font-medium px-[7px] ">
          Featured Success Story
        </span>
        <span className="text-[26px] lg:text-[30px] text-white font-medium ">
          Scaling Success for a Leading E-Commerce Brand
        </span>
        <p className="text-white text-lg ">
          Through a comprehensive SEO and PPC strategy, we helped this
          e-commerce brand increase visibility, drive traffic, and boost sales.
        </p>
        <ul className="flex flex-col gap-[25px] lg:gap-[30px] lg:hidden">
          {successStoryList.map(({ percentage, text }) => (
            <li
              key={percentage}
              className="flex flex-col items-center gap-2.5 p-[30px] lg:px-5 bg-white rounded-[25px]"
            >
              <span className="text-[40px] font-medium">{percentage}%</span>
              <span className="text-lg text-center">{text}</span>
            </li>
          ))}
        </ul>
        <motion.button
          type="button"
          className="flex items-center gap-[15px] text-green text-[20px]"
          whileHover="wiggle"
        >
          <motion.div
            variants={{
              wiggle: {
                rotate: [0, -5, 5, -5, 5, 0],
                transition: {
                  duration: 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              },
            }}
          >
            <ArrowRead />
          </motion.div>
          Read
        </motion.button>
      </div>
      <ul className="hidden lg:grid lg:grid-cols-2 gap-[30px]">
        {successStoryList.map(({ percentage, text }) => (
          <li
            key={percentage}
            className="flex flex-col items-center gap-2.5 p-[30px] lg:px-5 bg-white rounded-[25px]"
          >
            <span className="text-[40px] font-medium">{percentage}%</span>
            <span className="text-lg text-center">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuccessStory;
