import SectionTab from "../SectionTab";
import StarIcon from "@assets/icons/star.svg";
import { seoProcess } from "@/app/constants/titleSectionSettings";
import { seoProcessList } from "@/app/constants/SeoProcessSettings";

const SeoProcess = () => {
  return (
    <div>
      <SectionTab
        title={seoProcess.title}
        description={seoProcess.description}
        wrapperClassName="mb-10 lg:mb-[80px]"
        descriptionClassName="lg:max-w-[459px]"
        subTitles={seoProcess.subTitles}
      />
      <ul className="flex flex-col gap-[21px] lg:gap-10">
        {seoProcessList.map(({ number, title, description }) => (
          <li
            key={number}
            className="flex gap-5 lg:gap-[60px] items-start bg-gray rounded-[45px] px-[30px] py-[35px] lg:px-[45px] lg:py-[51px]"
          >
            <div className="relative inline-flex items-center justify-center group cursor-pointer">
              <StarIcon className="fill-dark w-[46px] h-[46px] lg:w-[138px] lg:h-[138px] transition-transform duration-300 group-hover:rotate-[10deg] group-hover:translate-x-[5px] group-hover:translate-y-[5px]" />
              <span className="absolute text-green text-lg lg:text-[60px] font-medium">
                {number}
              </span>
            </div>
            <div className="flex flex-col gap-[15px] lg:gap-[30px]">
              <h3 className="text-[26px] leading-none lg:text-[30px] font-medium">
                {title}
              </h3>
              <p className="text-lg">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeoProcess;
