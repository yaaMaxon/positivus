"use client";

import { useMediaQuery } from "@/app/hooks/useMediaQuery";

type Props = {
  description?: string;
  title?: string;
  subTitles?: string[];
  descriptionClassName?: string;
  wrapperClassName?: string;
};

const SectionTab = ({
  title,
  subTitles,
  description,
  descriptionClassName,
  wrapperClassName,
}: Props) => {
  const isMedia1024 = useMediaQuery(1024);

  const generatedTitleMarkup = (() => {
    if (subTitles && isMedia1024) {
      // only for mobile
      return (
        <h2 className="flex flex-col items-center">
          {subTitles.map((subTitle) => (
            <span
              key={subTitle}
              className={`bg-green text-[36px] px-[7px] rounded-[7px]`}
            >
              {subTitle}
            </span>
          ))}
        </h2>
      );
    }

    return (
      <h2 className="text-[40px] font-medium bg-green rounded-[7px] px-[7px]">
        {title}
      </h2>
    );
  })();

  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-[30px] lg:gap-10 ${wrapperClassName}`}
    >
      {generatedTitleMarkup}
      {description && (
        <p
          className={`lg:text-lg text-center lg:text-start ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTab;
