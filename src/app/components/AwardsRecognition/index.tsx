"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTab from "../SectionTab";
import { awardsRecognition } from "@/app/constants/titleSectionSettings";
import { awardsRecognitionList } from "@/app/constants/AwardsRecognitionSettings";

const AwardsRecognition = () => {
  return (
    <div>
      <SectionTab
        title={awardsRecognition.title}
        description={awardsRecognition.description}
        subTitles={awardsRecognition.subTitles}
        wrapperClassName="mb-2.5 lg:mb-[100px]"
        descriptionClassName="lg:max-w-[583px]"
      />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5 lg:gap-10">
        {awardsRecognitionList.map(({ image, title, description }, index) => (
          <motion.li
            key={index}
            className="flex flex-col items-center gap-2.5 lg:gap-5 bg-gray rounded-[45px] px-5 pb-10 lg:px-[30px]"
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
            <Image
              src={image}
              alt="awards"
              layout="responsive"
              className="max-w-[220px]"
            />
            <h4 className="font-bold lg:font-semibold">{title}</h4>
            <p>{description}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default AwardsRecognition;
