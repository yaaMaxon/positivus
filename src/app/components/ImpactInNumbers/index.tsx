"use client";

import { motion } from "framer-motion";
import SectionTab from "../SectionTab";
import { impactInNumbers } from "@/app/constants/titleSectionSettings";
import { impactInNumbersList } from "@/app/constants/ImpactInNumbersSettings";

const ImpactInNumbers = () => {
  return (
    <div>
      <SectionTab
        title={impactInNumbers.title}
        description={impactInNumbers.description}
        subTitles={impactInNumbers.subTitles}
        wrapperClassName="mb-10 lg:mb-20"
        descriptionClassName="lg:max-w-[459px]"
      />
      <ul className="grid grid-cols-2 gap-y-[25px] lg:grid-cols-5 lg:gap-0">
        {impactInNumbersList.map(({ number, achiev }, index) => (
          <motion.li
            key={number}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`flex flex-col items-center lg:items-start ${
              index === impactInNumbersList.length - 1
                ? "col-span-2 flex justify-center lg:col-span-1 lg:justify-start"
                : ""
            }`}
          >
            <div
              className={`h-10 min-w-[140px] md:min-w-[205px] xl:min-w-[250px] border-t border-l border-r border-dark rounded-t-[20px]
          ${index === 0 ? "lg:border-l-0 lg:rounded-tl-none" : ""}
          ${
            index === impactInNumbersList.length - 1
              ? "lg:border-r-0 lg:rounded-tr-none"
              : ""
          }
        `}
            ></div>
            <div className="flex flex-col gap-1 items-center lg:items-start">
              <span className="text-[40px] font-medium">{number}</span>
              <span className="lg:text-18">{achiev}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ImpactInNumbers;
