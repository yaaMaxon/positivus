"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import StarIcon from "@assets/icons/star.svg";
import LinkIcon from "@assets/icons/linkIcon.svg";
import { successStoryList } from "@/app/constants/SuccessStorySettings";

const SuccessStory = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/about-us#core-values");
  };

  return (
    <div className="flex items-baseline lg:items-start gap-[30px] lg:gap-[75px] xl:gap-[150px] bg-dark rounded-[45px] px-10 pt-10 pb-[50px] lg:p-[50px]">
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
        <span className="text-[26px] lg:text-3xl text-white font-medium ">
          Scaling Success for a Leading E-Commerce Brand
        </span>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-white text-lg "
        >
          Through a comprehensive SEO and PPC strategy, we helped this
          e-commerce brand increase visibility, drive traffic, and boost sales.
        </motion.p>
        <ul className="flex flex-col gap-[25px] lg:gap-[30px] lg:hidden">
          {successStoryList.map(({ percentage, text }, index) => (
            <motion.li
              key={percentage}
              className="flex flex-col items-center gap-2.5 p-[30px] lg:px-5 bg-white rounded-[25px]"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.7 },
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="text-[40px] font-medium">{percentage}%</span>
              <span className="text-lg text-center">{text}</span>
            </motion.li>
          ))}
        </ul>
        <motion.button
          type="button"
          className="flex items-center gap-[15px] text-green text-xl"
          whileHover="wiggle"
          onClick={handleButtonClick}
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
            <LinkIcon className="fill-green text-dark" />
          </motion.div>
          Read
        </motion.button>
      </div>
      <ul className="hidden lg:grid lg:grid-cols-2 lg:gap-5 xl:gap-[30px]">
        {successStoryList.map(({ percentage, text }, index) => (
          <motion.li
            key={percentage}
            className="flex flex-col items-center gap-2.5 p-[30px] lg:px-5 bg-white rounded-[25px]"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.7 },
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="lg:text-3xl xl:text-[40px] font-medium">
              {percentage}%
            </span>
            <span className="xl:text-lg text-center">{text}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default SuccessStory;
