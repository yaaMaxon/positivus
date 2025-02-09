"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Button from "../Button";

type Props = {
  subTitle: string;
  description: string;
  textBtn: string;
  icon?: React.ReactNode;
  furtherIcon?: React.ReactNode;
  className?: string;
  path: string;
};

const BlurbBox = ({
  subTitle,
  description,
  furtherIcon,
  icon,
  textBtn,
  className,
  path,
}: Props) => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push(`${path}`);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={`lg:relative lg:flex justify-between bg-gray p-[50px] lg:px-[60px] rounded-[45px] 
      } ${className && className}`}
    >
      <div
        className={`flex flex-col items-start gap-5 lg:gap-[26px] lg:max-w-[500px]${
          furtherIcon && "gap-[25px]"
        }`}
      >
        <span className="text-[26px] lg:text-3xl font-medium">{subTitle}</span>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className={`lg:max-w-[500px] ${furtherIcon && "lg:max-w-[600px]"}`}
        >
          {description}
        </motion.p>
        <Button className="bg-dark text-white" onClick={handleButtonClick}>
          {textBtn}
        </Button>
      </div>
      {icon && (
        <div className="lg:absolute bottom-[-24px] right-0 hidden lg:block">
          {icon}
        </div>
      )}
      {furtherIcon && <div className="hidden lg:block">{furtherIcon}</div>}
    </motion.div>
  );
};

export default BlurbBox;
