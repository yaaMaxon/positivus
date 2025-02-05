"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay, FreeMode } from "swiper/modules";
import { socialPlatforms } from "@/app/constants/SocialPlatforms";

type Props = {
  ltr?: boolean;
};

const SocialPlatforms = ({ ltr = true }: Props) => {
  return (
    <div className="w-full py-5">
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={56}
        slidesPerView="auto"
        freeMode={true}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={3000}
        dir={ltr ? "ltr" : "rtl"}
        style={{
          direction: ltr ? "ltr" : "rtl",
        }}
      >
        {[...socialPlatforms, ...socialPlatforms].map(({ icon }, index) => (
          <SwiperSlide key={index} className="!w-auto">
            {icon}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SocialPlatforms;
