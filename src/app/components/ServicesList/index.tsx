"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ServicesItems } from "@/app/types/services";

type Prop = {
  servicesList: ServicesItems[];
};

const ServicesList = ({ servicesList }: Prop) => {
  return (
    <ul className="flex flex-col gap-[30px] lg:grid lg:grid-cols-2 mb-[70px] lg:mb-[120px]">
      {servicesList.map(
        ({
          src,
          alt,
          firstText,
          secondText,
          bgColor,
          bgTextColor,
          learnMore,
          icon,
        }) => (
          <motion.li
            key={alt}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.7 },
            }}
            className={`lg:flex items-center justify-between p-[50px] border border-dark rounded-[45px] shadow-[0px_5px_0px_0px_#191A23] cursor-pointer ${
              bgColor ? bgColor : "bg-gray"
            }`}
          >
            <div className="lg:flex flex-col gap-[93px]">
              <div className="flex flex-col items-start mb-[27px] lg:mb-0">
                <span
                  className={`text-[26px] lg:text-3xl px-[7px] rounded-[7px] ${
                    bgTextColor ? bgTextColor : "bg-white"
                  }`}
                >
                  {firstText}
                </span>
                <span
                  className={`text-[26px] lg:text-3xl px-[7px] rounded-[7px] ${
                    bgTextColor ? bgTextColor : "bg-white"
                  }`}
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
                  <span
                    className={`text-5 hidden lg:block ${
                      learnMore ? learnMore : "text-black"
                    }`}
                  >
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

export default ServicesList;
