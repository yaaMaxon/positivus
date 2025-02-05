"use client";

import { motion } from "framer-motion";
import ArrowRead from "@assets/icons/arrowRead.svg";

interface TableItems {
  title: string;
  description: string;
  link: string;
}

type Props = {
  tableList: TableItems[];
};

const TableBox = ({ tableList }: Props) => {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-0 lg:shadow-[0px_5px_0px_0px_#191A23] lg:border lg:border-dark lg:rounded-[45px] lg:px-[60px] lg:py-20">
      {tableList.map(({ title, description, link }, index) => (
        <li
          key={index}
          className={`flex flex-col gap-5 border border-dark rounded-[45px] lg:rounded-none px-[50px] py-[42px] shadow-[0px_5px_0px_0px_#191A23] lg:shadow-none

            lg:border-0 lg:p-0
            ${index < 3 ? "lg:border-b lg:border-b-dark" : ""}
            ${
              index === 1 || index === 4
                ? "lg:border-l lg:border-r lg:border-l-dark lg:border-r-dark"
                : ""
            }

            ${index === 0 ? "lg:pr-[64px] lg:pb-[60px]" : ""}
            ${index === 1 ? "lg:pr-[64px] lg:pl-[64px] lg:pb-[60px]" : ""}
            ${index === 2 ? "lg:pl-[64px] lg:pb-[60px]" : ""}
            ${index === 3 ? "lg:pr-[64px] lg:pt-[60px]" : ""}
            ${index === 4 ? "lg:pl-[64px] lg:pr-[64px] lg:pt-[60px]" : ""}
            ${index === 5 ? "lg:pl-[64px] lg:pt-[60px]" : ""}
        `}
        >
          <h3 className="text-[30px] leading-none font-medium">{title}</h3>
          <p className="lg:text-lg">{description}</p>
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
            {link}
          </motion.button>
        </li>
      ))}
    </ul>
  );
};

export default TableBox;
