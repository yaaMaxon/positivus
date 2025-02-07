"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTab from "../SectionTab";
import { coreValues } from "@/app/constants/titleSectionSettings";
import { coreValueList } from "@/app/constants/CoreValueSettings";

const CoreValue = () => {
  return (
    <div>
      <SectionTab
        title={coreValues.title}
        description={coreValues.description}
        wrapperClassName="mb-10 lg:mb-[120px]"
        descriptionClassName="lg:max-w-[298px]"
      />
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-10">
        {coreValueList.map(({ image, title, description }, index) => (
          <motion.li
            key={index}
            className={`p-10 lg:p-[50px] border border-dark rounded-[45px] shadow-[0px_5px_0px_0px_#191A23] cursor-pointer 
                ${index === 2 ? "lg:order-4" : ""} 
                ${index === 3 ? "lg:order-3" : ""}`}
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
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex flex-col gap-5 lg:gap-10">
                <h3 className="text-[26px] lg:text-3xl font-medium pb-5 lg:pb-10 border-b border-b-dark">
                  {title}
                </h3>
                <p className="lg:text-lg">{description}</p>
              </div>
              {image && (
                <Image
                  src={image}
                  alt="core value"
                  layout="responsive"
                  className="mr-auto ml-auto lg:m-0 max-w-[330px]"
                />
              )}
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default CoreValue;
