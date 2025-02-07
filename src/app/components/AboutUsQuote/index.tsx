"use client";

import { motion } from "framer-motion";

const AboutUsQuote = () => {
  return (
    <motion.div
      className="flex flex-col gap-10 p-[50px] lg:p-20 bg-dark rounded-[45px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <p className="text-xl lg:text-4xl xl:text-[41px] text-white font-medium">
        “At Positivus, we believe that success is built on innovation,
        collaboration, and a relentless focus on delivering results.”
      </p>
      <motion.span
        className="text-lg lg:text-2xl text-white"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        — John Smith, Founder of Positivus
      </motion.span>
    </motion.div>
  );
};

export default AboutUsQuote;
