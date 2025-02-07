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
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mb-10 lg:mb-[70px]">
        <li className="flex flex-col gap-[15px] border border-dark shadow-[0px_5px_0px_0px_#191A23] px-[30px] py-10 rounded-[25px]">
          <span className="text-lg">Businesses earn an average of</span>
          <span className="text-3xl font-medium">$2 for every $1 spent</span>
          <span className="text-lg">on PPC advertising.</span>
        </li>
        <li className="flex flex-col gap-[15px] bg-green px-[30px] py-10 rounded-[25px]">
          <span className="text-3xl font-medium">41% of clicks</span>
          <p className="text-lg">
            on search engines go to the top three organic results, showing the
            importance of ranking highly.
          </p>
        </li>
        <li className="flex flex-col gap-[15px] bg-gray px-[30px] py-10 rounded-[25px]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-[15px] lg:gap-[25px]">
            <span className="text-lg">Content marketing costs</span>
            <span className="text-3xl font-medium">62% less than paid ads</span>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-[15px] lg:gap-[25px]">
            <span className="text-lg">but generates</span>
            <span className="text-3xl font-medium">3x as many leads</span>
          </div>
        </li>
        <li className="flex flex-col gap-[15px] bg-dark px-[30px] py-10 rounded-[25px]">
          <span className="text-lg text-white">Organic search drives</span>
          <span className="text-3xl font-medium text-white">
            <span className="text-3xl font-medium text-green">53%</span>
            of all website traffic,
          </span>
          <span className="text-lg text-white">
            making it the largest single source of traffic.
          </span>
        </li>
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
