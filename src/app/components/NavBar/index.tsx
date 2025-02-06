"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import StarLogo from "@assets/icons/starLogo.svg";
import PositivusLogo from "@assets/icons/positivusLogo.svg";
import BurgerMenu from "@assets/icons/burgerMenu.svg";
import { MdClose } from "react-icons/md";
import { navigatPages } from "../../constants/NavigatSettings";
import MobileMenu from "../MobileMenu";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuState] = useState(false);
  const pathname = usePathname();

  const handleMenuToggle = () => {
    setMobileMenuState((prev) => !prev);
  };

  const handleMenuClose = () => {
    setMobileMenuState(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHeaderStyles = () => {
    if (isMobileMenuOpen) {
      return "bg-gray";
    }

    if (isScrolled) {
      return "bg-gray/70 py-6";
    }

    if (!isScrolled) {
      return "bg-transparent";
    }
  };

  return (
    <>
      <header
        className={`sticky left-0 top-0 pt-[30px] lg:pt-[30px] px-5 lg:px-[100px] z-[200] transition-colors duration-300 ${getHeaderStyles()}`}
      >
        <nav className="flex justify-between items-center">
          <Link
            href="/"
            onClick={handleMenuClose}
            className="flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
          >
            <StarLogo />
            <PositivusLogo />
          </Link>
          <button
            type="button"
            onClick={handleMenuToggle}
            className="cursor-pointer lg:hidden"
          >
            {isMobileMenuOpen ? (
              <MdClose className="w-[26px] h-[29px]" />
            ) : (
              <BurgerMenu />
            )}
          </button>
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center lg:gap-5 xl:gap-10">
              {navigatPages.map(({ page, path }) => (
                <motion.li
                  key={page}
                  className="relative rounded-[9px]"
                  whileHover={{
                    scale: 1.1,
                    rotateX: 10,
                    rotateY: 10,
                    boxShadow: "0px 10px 20px rgba(72, 187, 120, 0.4)",
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Link
                    href={path}
                    className={`${
                      pathname === path
                        ? "bg-green px-2.5 py-[5px] rounded-[9px]"
                        : ""
                    } lg:text-lg xl:text-[20px] hover:bg-green hover:px-2.5 hover:py-[5px] hover:rounded-[9px] transition-all duration-300`}
                  >
                    {page}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.button
              type="button"
              className="lg:text-lg xl:text-[20px] border border-[#191A23] rounded-[14px] lg:px-5 lg:py-2 xl:px-[35px] xl:py-5 bg-transparent transition-all duration-300"
              whileHover={{
                backgroundColor: "#B9FF66",
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
        </nav>
      </header>
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        navBarPages={navigatPages}
        handleMenuToggle={handleMenuToggle}
      />
    </>
  );
};

export default NavBar;
