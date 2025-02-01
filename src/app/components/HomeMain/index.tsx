import Image from "next/image";
import homeIllustration from "@assets/img/homeIllustration.webp";
import homeIllustrationDesk from "@assets/img/homeIllustrationDesk.webp";
import SocialPlatforms from "../SocialPlatforms";

const HomeMain = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-[60px] lg:mb-[70px]">
        <div className="flex flex-col items-center lg:items-start lg:gap-[35px]">
          <h1 className="text-[43px] font-medium lg:text-[60px] mb-2.5 lg:mb-0 lg:max-w-[530px]">
            Navigating the digital landscape for success
          </h1>
          <Image
            src={homeIllustration}
            alt="homeIllustration"
            className="lg:hidden mb-5"
          />
          <p className="lg:text-[20px] mb-10 lg:mb-0 lg:max-w-[500px]">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button
            type="button"
            className="bg-dark text-white text-[20px] px-[35px] py-5 rounded-[14px] transition-all duration-300 hover:-translate-y-1 active:translate-y-1"
          >
            Book a consultation
          </button>
        </div>
        <Image
          src={homeIllustrationDesk}
          alt="homeIllustrationDesk"
          className="hidden lg:block"
        />
      </div>
      <SocialPlatforms />
    </div>
  );
};

export default HomeMain;
