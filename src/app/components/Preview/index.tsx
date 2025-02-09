"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type Prop = {
  title: string;
  subTitle?: string;
  description: string;
  img: string | StaticImageData;
};

const Preview = ({ title, subTitle, description, img }: Prop) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={`flex items-center lg:items-start flex-col lg:flex-row justify-center gap-[100px] lg:bg-gray lg:rounded-[45px] lg:py-16 lg:px-[100px] ${
        subTitle && "bg-gray -mx-5 lg:mx-0 px-5 py-10"
      }`}
    >
      <Image
        src={img}
        alt="preview picture"
        layout="responsive"
        className="max-w-[475px] hidden lg:block"
      />
      <div className="flex max-w-[500px] justify-center flex-col items-center lg:items-start gap-[35px] lg:gap-[25px] xl:gap-[50px]">
        {subTitle && (
          <span className="self-start bg-[#E8E8E8] text-lg text-[#696969] rounded-[9px] px-4 py-[5px]">
            {subTitle}
          </span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className={`text-4xl lg:text-[43px] xl:text-6xl leading-none font-medium ${
            subTitle ? "lg:text-[40px]" : "lg:text-6xl"
          }`}
        >
          {title}
        </motion.h1>
        <Image src={img} alt="preview picture" className="lg:hidden" />
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-base lg:text-lg xl:text-xl"
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preview;
