"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import ArrowRightIcon from "@/assets/icons/arrowRight.svg";
import ArrowLeftIcon from "@/assets/icons/arrowLeft.svg";
import StarIcon from "@/assets/icons/star.svg";
import { testimonialsList } from "@/app/constants/TestimonialsSettings";
import { testimonials } from "@/app/constants/titleSectionSettings";
import SectionTab from "../SectionTab";

const TOTAL_STARS = 6;

const Testimonials = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [progress, setProgress] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlidesPerView = () => {
      setSlidesPerView(window.innerWidth >= 1024 ? 1.5 : 1);
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current;
      setProgress(1 / (swiper.slides.length - slidesPerView + 1));
    }
  }, [slidesPerView]);

  return (
    <>
      <SectionTab
        title={testimonials.title}
        description={testimonials.description}
        wrapperClassName="mb-10 lg:mb-[85px]"
        descriptionClassName="lg:max-w-[473px]"
      />
      <div className="flex flex-col gap-[60px] lg:gap-[124px] bg-dark px-[30px] lg:px-0 pt-[30px] lg:pt-[84px] pb-[60px] lg:pb-[68px] rounded-[45px]">
        {testimonialsList.length > 0 ? (
          <Swiper
            className="w-full h-auto min-h-[200px]"
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => {
              if (swiperRef.current) {
                setProgress(
                  (swiper.activeIndex + 1) /
                    (swiperRef.current.slides.length - slidesPerView + 1)
                );
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }
            }}
            breakpoints={{
              1024: {
                slidesPerView: 1.5,
                spaceBetween: 50,
                centeredSlides: true,
              },
            }}
          >
            {testimonialsList.map(({ name, position, description }, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-[45px] lg:gap-[50px] items-center">
                  <p className="text-white p-[30px] lg:p-[50px] border border-green rounded-[45px]">
                    {description}
                  </p>
                  <div className="flex flex-col">
                    <span className="text-green">{name}</span>
                    <span className="text-white">{position}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-white text-center">No testimonials available.</p>
        )}

        <div className="flex items-center gap-3 mx-auto">
          <button
            type="button"
            className={`testimonial-prev transition-opacity ${
              isBeginning ? "opacity-30" : "opacity-100"
            }`}
          >
            <ArrowLeftIcon />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: TOTAL_STARS }).map((_, index) => (
              <StarIcon
                key={index}
                className={`w-[14px] h-[14px] transition-colors ${
                  index < Math.round(progress * TOTAL_STARS)
                    ? "fill-green"
                    : "fill-white"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            className={`testimonial-next transition-opacity ${
              isEnd ? "opacity-30" : "opacity-100"
            }`}
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
