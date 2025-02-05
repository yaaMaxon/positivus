"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ArrowGreen from "@assets/icons/arrowGreen.svg";
import SectionTab from "@components/SectionTab";

type Props = {
  spanText: string;
  paragraphText: string;
  listItems: { text: string; extraSpan?: string }[];
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
        {listItems.map(({ extraSpan, text }, index) => (
          <li
            key={index}
            className={`flex flex-col gap-5 ${
              index !== 0 && index !== listItems.length - 1
                ? "border-x border-white px-[64px]"
                : ""
            }`}
          >
            {extraSpan && (
              <span className="text-[30px] text-white font-medium">
                {extraSpan}
              </span>
            )}
            <p className="text-lg text-white">{text}</p>
            <span className="flex items-center gap-[15px] text-[20px] text-green cursor-pointer">
              Learn more <ArrowGreen />
            </span>
          </li>
        ))}
      </ul>

      <div className="lg:hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={false}
          grabCursor
        >
          {listItems.map(({ extraSpan, text }, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-5 bg-dark px-[50px] py-[42px] rounded-[45px]">
                {extraSpan && (
                  <span className="text-[30px] text-white font-medium">
                    {extraSpan}
                  </span>
                )}
                <p className="text-white">{text}</p>
                <div className="flex items-center gap-[15px] text-[20px] text-green cursor-pointer">
                  Learn more <ArrowGreen />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CaseBox;
