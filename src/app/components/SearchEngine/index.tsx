"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import LinkIcon from "@assets/icons/linkIcon.svg";
import StarIcon from "@assets/icons/star.svg";
import Button from "../Button";

const SearchEngine = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/#contact-us");
  };

  const handleBackClick = () => {
    router.push("/#home-services");
  };

  return (
    <div>
      <div className="mb-[50px] lg:mb-[40px]">
        <motion.button
          type="button"
          className="flex items-center gap-[15px] text-xl"
          whileHover="wiggle"
          onClick={handleBackClick}
        >
          <motion.div
            variants={{
              wiggle: {
                rotate: [0, -5, 5, -5, 5, 0],
                transition: {
                  duration: 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              },
            }}
          >
            <LinkIcon className="fill-dark text-green rotate-[240deg]" />
          </motion.div>
          Back
        </motion.button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex items-baseline gap-5 lg:gap-[45px] bg-dark rounded-[45px] px-10 pt-10 pb-[50px] lg:py-[60px] lg:pr-[100px] lg:pl-10"
      >
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <StarIcon className="fill-green w-[18px] lg:w-[35px] h-[18px] lg:h-[35px]" />
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-[60px]">
          <span className="text-green text-[26px] font-medium lg:hidden">
            FEATURED
          </span>
          <span className="text-[26px] text-white font-medium lg:hidden">
            Search engine optimization
          </span>
          <div className="hidden lg:flex flex-col">
            <span className="bg-green rounded-[7px] text-3xl font-medium px-[7px] min-w-[221px]">
              Search engine
            </span>
            <span className="bg-green rounded-[7px] text-3xl font-medium px-[7px] max-w-[197px]">
              optimization
            </span>
          </div>
          <div className="flex flex-col gap-5 lg:gap-[50px]">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-white text-lg"
            >
              SEO is the process of improving your website’s visibility on
              search engines like Google. By optimizing your content and site
              structure, we help your business rank higher in search results,
              driving more organic traffic and potential customers.
            </motion.p>
            <Button className="bg-white text-xl" onClick={handleButtonClick}>
              Boost My Rankings
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SearchEngine;
