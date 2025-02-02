"use client";

import PlusIcon from "@assets/icons/plus.svg";
import MinusIcon from "@assets/icons/minus.svg";
import { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  spanText?: string;
  spanStartTextMb: string;
  spanEndTextMb: string;
  paragraphText?: string;
  questionsList: { number?: string; question: string; answer: string }[];
};

const QuestionBox = ({
  spanText,
  spanStartTextMb,
  spanEndTextMb,
  paragraphText,
  questionsList,
}: Props) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState<{
    [key: number]: boolean;
  }>({});

  const handleIsAnswerVisible = (index: number) => {
    setIsAnswerVisible((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center gap-[30px] lg:gap-10 mb-[30px] lg:mb-[85px]">
        <h2 className="hidden lg:block text-[40px] font-medium bg-green rounded-[7px] px-[7px]">
          {spanText}
        </h2>
        <h2 className="flex lg:hidden flex-col items-center">
          <span className={`bg-green text-[36px] px-[7px] rounded-[7px]`}>
            {spanStartTextMb}
          </span>
          <span className={`bg-green text-[36px] px-[7px] rounded-[7px]`}>
            {spanEndTextMb}
          </span>
        </h2>
        {paragraphText && (
          <p className="lg:text-lg text-center lg:text-start lg:max-w-[292px]">
            {paragraphText}
          </p>
        )}
      </div>
      <ul className="flex gap-5 flex-col lg:gap-[30px]">
        {questionsList.map(({ number, question, answer }, index) => (
          <li
            key={index}
            onClick={() => handleIsAnswerVisible(index)}
            className={`bg-gray border border-dark rounded-[45px] p-[30px] lg:px-[60px] lg:py-[41px] shadow-[0px_5px_0px_0px_#191A23] cursor-pointer ${
              isAnswerVisible[index] && "bg-green"
            }`}
          >
            <div
              className={`flex justify-between items-center ${
                isAnswerVisible[index] && "mb-[30px]"
              }`}
            >
              <div className="flex items-center gap-[25px]">
                {number && (
                  <span className="text-[30px] lg:text-[60px] font-medium">
                    {number}
                  </span>
                )}
                <span className="text-lg lg:text-[30px] font-medium">
                  {question}
                </span>
              </div>
              <button type="button">
                <motion.div
                  key={isAnswerVisible[index] ? "minus" : "plus"}
                  initial={{ scale: 0.8, rotate: 0 }}
                  animate={{ scale: 1, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  {isAnswerVisible[index] ? (
                    <MinusIcon className="w-[30px] h-[30px] lg:w-[58px] lg:h-[58px]" />
                  ) : (
                    <PlusIcon className="w-[30px] h-[30px] lg:w-[58px] lg:h-[58px]" />
                  )}
                </motion.div>
              </button>
            </div>
            {isAnswerVisible[index] && (
              <p className="text-lg pt-[30px] border-t border-t-black">
                {answer}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionBox;
