"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../Button";
import { teamList } from "./TeamSettings";
import frame from "@assets/img/frame.webp";
import LinkeDin from "@assets/icons/linkedin.svg";

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
      <div className="flex flex-col lg:flex-row items-center gap-[30px] lg:gap-10 mb-10 lg:mb-[85px]">
        <h2 className="text-[36px] lg:text-[40px] font-medium bg-green rounded-[7px] px-[7px]">
          Team
        </h2>
        <p className="lg:text-lg text-center lg:text-start lg:max-w-[580px]">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] lg:gap-10 mb-[39px] lg:mb-0">
        {teamList
          .slice(0, isDesktop ? teamList.length : visibleCount)
          .map(({ image, name, position, description }) => (
            <motion.li
              key={name}
              className="border border-dark rounded-[45px] px-[35px] py-[40px] shadow-[0px_5px_0px_0px_#191A23] cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
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
                  <span className="text-lg lg:text-[20px] font-medium">
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
                {/* <LinkeDin className="absolute top-0 right-0" /> */}
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
