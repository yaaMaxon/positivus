"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { mySocialNetworks } from "@/app/constants/MySocialNetworks";

const MySocialNetworks = () => {
  return (
    <ul className="flex items-center gap-5 order-5 lg:order-3 lg:col-span-1">
      {mySocialNetworks.map(({ icon, link }) => (
        <li key={link}>
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              {icon}
            </motion.div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MySocialNetworks;
