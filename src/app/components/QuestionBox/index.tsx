"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import PlusIcon from "@assets/icons/plus.svg";
import MinusIcon from "@assets/icons/minus.svg";
import SectionTab from "../SectionTab";

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
      <SectionTab
        title={spanText}
        description={paragraphText}
        wrapperClassName="mb-10 lg:mb-[85px]"
        descriptionClassName="lg:max-w-[292px]"
        subTitles={[spanStartTextMb, spanEndTextMb]}
      />
      <ul className="flex gap-5 flex-col lg:gap-[30px]">
        {questionsList.map(({ number, question, answer }, index) => (
          <motion.li
            key={index}
            onClick={() => handleIsAnswerVisible(index)}
            className={`bg-gray border border-dark rounded-[45px] p-[30px] lg:px-[60px] lg:py-[41px] shadow-[0px_5px_0px_0px_#191A23] cursor-pointer ${
              isAnswerVisible[index] && "bg-green"
            }`}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.7 },
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className={`flex justify-between items-center ${
                isAnswerVisible[index] && "mb-[30px]"
              }`}
            >
              <div className="flex items-center gap-[25px]">
                {number && (
                  <span className="text-3xl lg:text-6xl font-medium">
                    {number}
                  </span>
                )}
                <span className="text-lg lg:text-3xl font-medium">
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
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionBox;
