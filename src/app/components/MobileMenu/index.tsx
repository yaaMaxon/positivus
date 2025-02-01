"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type Prop = {
  navBarPages: NavBarItems[];
  isMobileMenuOpen: boolean;
  handleMenuToggle: () => void;
};

interface NavBarItems {
  page: string;
  path: string;
}

const MobileMenu = ({
  navBarPages,
  isMobileMenuOpen,
  handleMenuToggle,
}: Prop) => {
  const pathname = usePathname();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed w-full flex flex-col justify-between pt-6 pb-3 h-[calc(100vh-50px)] bg-gray z-[150] lg:hidden"
        >
          <ul className="flex flex-col gap-6 items-center">
            {navBarPages.map(({ page, path }: NavBarItems) => (
              <motion.li
                key={page}
                onClick={handleMenuToggle}
                className="relative"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 5px 15px rgba(255, 255, 255, 0.2)",
                  transformPerspective: 1000,
                  translateZ: 50,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Link
                  href={path}
                  className={`${
                    pathname === path && "underline"
                  } text-2xl font-medium hover:underline`}
                >
                  {page}
                </Link>
              </motion.li>
            ))}
          </ul>
          <div className="flex flex-col items-center gap-[15px]">
            <span>@2023 streamvib, All Rights Reserved</span>
            <span>Privacy Policy</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
