"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import LinkIcon from "@assets/icons/linkIcon.svg";
import SectionTab from "@components/SectionTab";

type Props = {
  spanText: string;
  paragraphText: string;
  listItems: { text: string; extraSpan?: string; path: string }[];
};

const CaseBox = ({ spanText, paragraphText, listItems }: Props) => {
  return (
    <div>
      <SectionTab
        title={spanText}
        description={paragraphText}
        wrapperClassName="mb-10 lg:mb-[85px]"
        descriptionClassName="lg:max-w-[580px]"
      />
      <ul className="hidden lg:flex gap-[64px] bg-dark py-[70px] px-[60px] rounded-[45px]">
        {listItems.map(({ extraSpan, text, path }, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`flex flex-col gap-5 ${
              index !== 0 && index !== listItems.length - 1
                ? "border-x border-white px-[64px]"
                : ""
            }`}
          >
            {extraSpan && (
              <span className="text-3xl text-white font-medium">
                {extraSpan}
              </span>
            )}
            <p className="text-lg text-white">{text}</p>
            <Link href={path}>
              <motion.button
                type="button"
                className="flex items-center gap-1 text-xl text-green cursor-pointer"
                whileHover="wiggle"
              >
                Learn more
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
                  <LinkIcon className="text-green" />
                </motion.div>
              </motion.button>
            </Link>
          </motion.li>
        ))}
      </ul>

      <div className="lg:hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={false}
          grabCursor
        >
          {listItems.map(({ extraSpan, text, path }, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-5 bg-dark px-[50px] py-[42px] rounded-[45px]">
                {extraSpan && (
                  <span className="text-xl xl:text-3xl text-white font-medium">
                    {extraSpan}
                  </span>
                )}
                <p className="text-white">{text}</p>
                <Link href={path}>
                  <motion.button
                    type="button"
                    className="flex items-center gap-1 text-sm lg:text-lg xl:text-xl text-green cursor-pointer"
                    whileHover="wiggle"
                  >
                    Learn more
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
                      <LinkIcon className="text-green" />
                    </motion.div>
                  </motion.button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CaseBox;
