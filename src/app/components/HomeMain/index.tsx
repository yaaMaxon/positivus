import Image from "next/image";
import homeIllustration from "@assets/img/homeIllustration.webp";
import homeIllustrationDesk from "@assets/img/homeIllustrationDesk.webp";
import Button from "../Button";
import SocialPlatforms from "../SocialPlatforms";

const HomeMain = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-[60px] lg:mb-[70px]">
        <div className="flex flex-col items-center lg:items-start lg:gap-[35px]">
          <h1 className="text-[43px] font-medium lg:text-6xl mb-2.5 lg:mb-0 lg:max-w-[530px]">
            Navigating the digital landscape for success
          </h1>
          <Image
            src={homeIllustration}
            alt="homeIllustration"
            className="lg:hidden mb-5"
          />
          <p className="lg:text-xl mb-10 lg:mb-0 lg:max-w-[500px]">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <Button className="bg-dark text-white">Book a consultation</Button>
        </div>
        <Image
          src={homeIllustrationDesk}
          alt="homeIllustrationDesk"
          className="w-[430px] my-auto lg:w-[600px] object-contain hidden lg:block"
        />
      </div>
      <SocialPlatforms />
      <SocialPlatforms ltr={false} />
    </div>
  );
};

export default HomeMain;
