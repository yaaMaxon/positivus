"use client";

import Button from "../Button";
import CheckIcon from "@assets/icons/check.svg";
import { pricingList } from "@/app/constants/PricingSettings";
import { motion } from "framer-motion";

const PricingPlans = () => {
  return (
    <div>
      <div className="flex flex-col items-start gap-[35px] lg:gap-[15px] mb-[60px] lg:mb-[100px]">
        <h2 className="text-[40px] leading-normal lg:text[90px] font-medium">
          Pricing
        </h2>
        <p className="lg:text-xl leading-normal text-start lg:max-w-[498px]">
          Elevate Your Online Presence: Competitive Pricing for Exceptional
          Results
        </p>
      </div>
      <ul className="flex flex-col gap-[30px] lg:flex-row lg:gap-[40px]">
        {pricingList.map(({ plan, price, advantages }, index) => (
          <motion.li
            key={plan}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.7 },
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`px-[30px] pt-[30px] pb-[50px] border border-dark rounded-[30px] shadow-[0px_5px_0px_0px_#191A23] cursor-pointer ${
              plan === "Pro Plan" && "bg-dark"
            }`}
          >
            <div className="flex items-center justify-between mb-5">
              <span
                className={`text-3xl font-semibold ${
                  plan === "Pro Plan" && "text-white"
                }`}
              >
                {plan}
              </span>
              {plan === "Pro Plan" && (
                <motion.span
                  className="px-3 py-1 bg-green rounded-[33px] font-medium"
                  animate={{
                    x: [0, -3, 3, -3, 3, 0],
                    y: [0, -2, 2, -2, 2, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                >
                  Popular
                </motion.span>
              )}
            </div>
            <div className="mb-[50px]">
              <span
                className={`text-[50px] font-medium mr-2.5 ${
                  plan === "Pro Plan" && "text-white"
                }`}
              >
                ${price}
              </span>
              <span
                className={`text-lg text-black ${
                  plan === "Pro Plan" && "text-white"
                }`}
              >
                /month
              </span>
            </div>
            <div
              className={`flex flex-col gap-5 mb-[45px] lg:mb-10 pb-[45px] border-b border-b-black ${
                plan === "Pro Plan" && "border-b-white"
              }`}
            >
              <Button
                className={`${
                  plan === "Pro Plan"
                    ? "bg-green text-black"
                    : "bg-dark text-white"
                }`}
              >
                Get Started
              </Button>
              <motion.button
                type="button"
                className={`text-xl border-[2px] border-[#191A23] rounded-[14px] px-[35px] py-5 bg-transparent transition-all duration-300 ${
                  plan === "Pro Plan" && "text-white border-white"
                }`}
                whileHover={{
                  backgroundColor: "  #B9FF66",
                  y: -5,
                }}
                whileTap={{
                  y: 2,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                Request a quote
              </motion.button>
            </div>
            <ul className="flex flex-col gap-5">
              {advantages.map((advantage) => (
                <li key={advantage} className="flex items-start gap-[15px]">
                  <CheckIcon />
                  <span
                    className={`text-lg leading-normal flex-1 break-words ${
                      plan === "Pro Plan" && "text-white"
                    }`}
                  >
                    {advantage}
                  </span>
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default PricingPlans;
