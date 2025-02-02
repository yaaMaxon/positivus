"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { servicesList } from "../HomeServicesList/HomeServicesSettings";

const HomeServicesList = () => {
  return (
    <ul className="flex flex-col gap-[30px] lg:grid lg:grid-cols-2 mb-[70px] lg:mb-[120px]">
      {servicesList.map(
        (
          {
            src,
            alt,
            firstText,
            secondText,
            bgColor,
            bgTextColor,
            learnMore,
            icon,
          },
          index
        ) => (
          <motion.li
            key={alt}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className={`lg:flex items-center justify-between p-[50px] border border-dark rounded-[45px] shadow-[0px_5px_0px_0px_#191A23] cursor-pointer ${bgColor}`}
          >
            <div className="lg:flex flex-col gap-[93px]">
              <div className="flex flex-col items-start mb-[27px] lg:mb-0">
                <span
                  className={`text-[26px] lg:text-[30px] px-[7px] rounded-[7px] ${bgTextColor}`}
                >
                  {firstText}
                </span>
                <span
                  className={`text-[26px] lg:text-[30px] px-[7px] rounded-[7px] ${bgTextColor}`}
                >
                  {secondText}
                </span>
              </div>
              <div className="flex justify-between items-end">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-[15px]"
                >
                  {icon}
                  <span className={`text-5 hidden lg:block ${learnMore}`}>
                    Learn more
                  </span>
                </motion.div>
                <Image src={src} alt={alt} className="lg:hidden" />
              </div>
            </div>
            <Image src={src} alt={alt} className="hidden lg:block" />
          </motion.li>
        )
      )}
    </ul>
  );
};

export default HomeServicesList;
