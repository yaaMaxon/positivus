"use client";

import { motion } from "framer-motion";
import BlogHeadline from "./components/BlogHeadline";
import StarIcon from "@assets/icons/star.svg";
import { challengeOfStandingOutOnline } from "@/app/constants/BlogSettings";
import { comparingPPCAndOrganicMarketing } from "@/app/constants/BlogSettings";
import { strikingTheRightBalance } from "@/app/constants/BlogSettings";
import { realWorldExamples } from "@/app/constants/BlogSettings";
import { choosingTheBestStrategy } from "@/app/constants/BlogSettings";
import { keyTakeaways } from "@/app/constants/BlogSettings";
import { listItems } from "@/app/constants/BlogSettings";

const BlogContent = () => {
  return (
    <div>
      <div className="flex flex-col gap-10 lg:gap-[70px] lg:px-[185px] mb-[30px] lg:mb-[50px]">
        <motion.p
          className="text-lg lg:text-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          In the ever-evolving digital landscape, businesses are faced with an
          important question: should they invest in pay-per-click (PPC)
          advertising or focus on organic marketing strategies? While both
          approaches have their merits, choosing the right one depends on your
          goals, budget, and timeline. Let’s dive into the strengths,
          challenges, and real-world applications of PPC and organic marketing
          to help you make an informed decision.
        </motion.p>
        <BlogHeadline headlineList={challengeOfStandingOutOnline} />
        <BlogHeadline headlineList={comparingPPCAndOrganicMarketing} />
        <BlogHeadline headlineList={strikingTheRightBalance} />
        <motion.h2
          className="text-4xl lg:text-[40px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          By the Numbers: Facts About PPC and Organic Marketing
        </motion.h2>
      </div>
      <ul className="flex flex-wrap gap-5 lg:gap-[30px] mb-10 lg:mb-[70px] justify-center">
        {listItems.map(({ classes, content }, index) => (
          <motion.li
            key={index}
            className={classes}
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
            {content}
          </motion.li>
        ))}
      </ul>
      <div className="flex flex-col gap-10 lg:gap-[70px] lg:px-[185px]">
        <BlogHeadline headlineList={realWorldExamples} />
        <BlogHeadline headlineList={keyTakeaways} />
        <BlogHeadline headlineList={choosingTheBestStrategy} />
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
          <StarIcon className="fill-dark w-[20px] h-[20px] mr-auto ml-auto" />
        </motion.div>
      </div>
    </div>
  );
};

export default BlogContent;
