"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "../Button";
import elevateRanking from "@assets/img/elevateRanking.webp";

const ElevateYourRanking = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/#contact-us");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col items-center lg:flex-row lg:items-end p-10 lg:px-[70px] lg:pt-[60px] lg:pb-[90px] border border-dark rounded-[45px] shadow-[0px_5px_0px_0px_#191A23]"
    >
      <div className="flex flex-col gap-5 lg:w-[60%]">
        <h2 className="text-[26px] lg:text-3xl font-medium pb-5 lg:pb-10 border-b border-b-black">
          Ready to Elevate Your Search Rankings?
        </h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className="lg:text-lg"
        >
          Our proven SEO strategies are designed to help your business achieve
          long-lasting success in search engines. Whether you want to boost
          organic traffic, improve keyword rankings, or increase conversions,
          we’re here to make it happen.
        </motion.p>
        <span className="text-lg font-semibold">
          Let’s work together to grow your online presence.
        </span>
        <Image
          className="max-w-[455px] block lg:hidden mr-auto ml-auto"
          layout="responsive"
          src={elevateRanking}
          alt="searching picture"
        />
        <Button className="bg-green" onClick={handleButtonClick}>
          Start My SEO Journey
        </Button>
      </div>
      <Image
        className="max-w-[455px] h-auto hidden lg:block w-[40%]"
        src={elevateRanking}
        alt="searching picture"
      />
    </motion.div>
  );
};

export default ElevateYourRanking;
