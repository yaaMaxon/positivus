"use client";

import { motion } from "framer-motion";

interface BlogItems {
  title: string;
  paragraphs?: string[];
  quote?: string;
  points?: string[];
}

type Props = {
  headlineList: BlogItems[];
};

const BlogHeadline = ({ headlineList }: Props) => {
  return (
    <>
      {headlineList.map(({ title, paragraphs, quote, points }, index) => (
        <motion.div
          key={index}
          className={`flex flex-col gap-5 lg:gap-[30px] ${
            quote && "gap-[30px] lg:gap-[50px]"
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-4xl lg:text-[40px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {title}
          </motion.h2>
          {points && (
            <ul className="list-disc list-inside">
              {points.map((point, idx) => (
                <li key={idx} className="lg:text-lg">
                  {point}
                </li>
              ))}
            </ul>
          )}
          {quote && (
            <p className="text-[26px] lg:text-3xl pl-[25px] lg:pl-[50px] border-l-[6px] border-l-green">
              {quote}
            </p>
          )}
          {paragraphs &&
            paragraphs.map((para: string, i) => (
              <p key={i} className="lg:text-lg">
                {para}
              </p>
            ))}
        </motion.div>
      ))}
    </>
  );
};

export default BlogHeadline;
