// import { socialPlatforms } from "@/app/types/SocialPlatforms";

// const SocialPlatforms = () => {
//   return (
//     <ul className="flex flex-wrap justify-between">
//       {socialPlatforms.map(({ icon }, index) => (
//         <li key={index}>{icon}</li>
//       ))}
//     </ul>
//   );
// };

// export default SocialPlatforms;

"use client";

import { motion } from "framer-motion";
import { socialPlatforms } from "@/app/types/SocialPlatforms";

const SocialPlatforms = () => {
  return (
    <div className="overflow-hidden w-full py-5">
      <motion.ul
        className="flex gap-10"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 10, // Швидкість руху
        }}
      >
        {[...socialPlatforms, ...socialPlatforms].map(({ icon }, index) => (
          <li key={index} className="flex-shrink-0">
            {icon}
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default SocialPlatforms;
