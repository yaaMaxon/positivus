import Image from "next/image";
import Button from "../Button";
import elevateRanking from "@assets/img/elevateRanking.webp";

const ElevateYourRanking = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:items-end p-10 lg:px-[70px] lg:pt-[60px] lg:pb-[90px] border border-dark rounded-[45px] shadow-[0px_5px_0px_0px_#191A23]">
      <div className="flex flex-col lg:items-center gap-5 lg:w-[60%]">
        <h2 className="text-[26px] lg:text-[30px] font-medium pb-5 lg:pb-10 border-b border-b-black">
          Ready to Elevate Your Search Rankings?
        </h2>
        <p className="lg:text-lg">
          Our proven SEO strategies are designed to help your business achieve
          long-lasting success in search engines. Whether you want to boost
          organic traffic, improve keyword rankings, or increase conversions,
          we’re here to make it happen.
        </p>
        <span className="text-lg font-semibold">
          Let’s work together to grow your online presence.
        </span>
        <Image
          className="max-w-[455px] block lg:hidden mr-auto ml-auto"
          layout="responsive"
          src={elevateRanking}
          alt="searching picture"
        />
        <Button className="bg-green">Start My SEO Journey</Button>
      </div>
      <Image
        className="max-w-[455px] h-auto hidden lg:block w-[40%]"
        src={elevateRanking}
        alt="searching picture"
      />
    </div>
  );
};

export default ElevateYourRanking;
