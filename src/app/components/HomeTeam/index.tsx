"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../Button";
import { teamList } from "./TeamSettings";
import frame from "@assets/img/frame.webp";
import LinkeDin from "@assets/icons/linkedin.svg";
import SectionTab from "../SectionTab";
import { homeTeam } from "@/app/constants/titleSectionSettings";

const HomeTeam = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShowMore = () => {
    setVisibleCount(teamList.length);
  };

  return (
    <div>
      <SectionTab
        title={homeTeam.title}
        description={homeTeam.description}
        wrapperClassName="mb-10 lg:mb-[85px]"
        descriptionClassName="lg:max-w-[473px]"
      />
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] lg:gap-10 mb-[39px] lg:mb-0">
        {teamList
          .slice(0, isDesktop ? teamList.length : visibleCount)
          .map(({ image, name, position, description }, index) => (
            <motion.li
              key={name}
              className="border border-dark rounded-[45px] px-[35px] py-[40px] shadow-[0px_5px_0px_0px_#191A23] cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
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
              <div className="relative flex items-end gap-5 mb-5 lg:mb-[28px]">
                <div className="relative">
                  <Image src={frame} alt="frame" />
                  <Image
                    src={image}
                    alt="employee"
                    className="absolute bottom-[13px] right-[13px]"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="lg:text-lg xl:text-xl font-medium">
                    {name}
                  </span>
                  <span className="lg:text-lg">{position}</span>
                </div>
                <motion.div
                  className="absolute top-0 right-0"
                  whileHover={{
                    rotate: 360,
                    scale: 1.2,
                    transition: { duration: 1, ease: "easeInOut" },
                  }}
                >
                  <LinkeDin />
                </motion.div>
              </div>
              <div className="pt-5 lg:pt-[28px] border-t border-t-black">
                <p className="lg:text-lg lg:max-w-[317px]">{description}</p>
              </div>
            </motion.li>
          ))}
      </ul>
      <div className="flex justify-center lg:hidden">
        {!isDesktop && visibleCount < teamList.length && (
          <Button className="bg-dark text-white" onClick={handleShowMore}>
            See all team
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeTeam;
