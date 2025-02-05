"use client";

import { usePathname } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import StarLogo from "@assets/icons/starLogo.svg";
import PositivusLogo from "@assets/icons/positivusLogo.svg";
import { navigatPages } from "../../constants/NavigatSettings";
import MySocialNetworks from "../MySocialNetworks";

interface ISupportForm {
  email: string;
}

const Footer = () => {
  const defaultValues = {
    email: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISupportForm>({ defaultValues });

  const onSubmit: SubmitHandler<ISupportForm> = (data) => {
    console.log(data);

    reset();
  };
  const pathname = usePathname();
  return (
    <footer className="flex flex-col items-center gap-[37px] lg:grid lg:grid-cols-3 lg:grid-rows-[auto_auto_auto] lg:mx-[99px] px-5 lg:px-[60px] pt-[50px] lg:pt-[55px] pb-[30px] lg:pb-[50px] bg-dark lg:rounded-tl-[45px] lg:rounded-tr-[45px]">
      <div className="lg:flex justify-between lg:col-span-3 lg:mb-[66px]">
        <Link
          href="/"
          className="flex items-center gap-2 transition-all duration-300 transform hover:scale-105 mb-[37px] lg:mb-0"
        >
          <StarLogo className="fill-white" />
          <PositivusLogo className="fill-white" />
        </Link>
        <ul className="flex flex-col lg:flex-row items-center lg:items-start gap-[15px] lg:gap-10">
          {navigatPages.map(({ page, path }) => (
            <li key={page} className="hover:underline">
              <Link
                href={path}
                className={`${
                  pathname === path && "text-green underline"
                } text-white lg:text-lg hover:underline`}
              >
                {page}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden lg:block">
          <MySocialNetworks />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-[37px] lg:gap-0 lg:col-span-3 lg:mb-[50px]">
        <div className="flex flex-col items-center lg:items-start gap-[37px] lg:gap-[27px]">
          <span className="px-[7px] text-lg font-medium bg-green rounded-[7px]">
            Contact us:
          </span>
          <div className="flex flex-col items-center lg:items-start gap-[15px] lg:gap-5">
            <a
              href="mailto:maks.sansei@gmail.com"
              className="text-white lg:text-lg"
            >
              Email:{" "}
              <span className="text-white lg:text-lg hover:underline">
                maks.sansei@gmail.com
              </span>
            </a>
            <a href="tel:+0682909944" className="text-white lg:text-lg">
              Phone:{" "}
              <span className="text-white lg:text-lg hover:underline">
                {" "}
                068 290 99 44
              </span>
            </a>
            <span className="text-white lg:text-lg cursor-pointer">
              Address:{" "}
              <span className="text-white lg:text-lg hover:underline">
                {" "}
                Lviv, Ukraine
              </span>
            </span>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col lg:flex-row gap-[20px] bg-[#292A32] rounded-[14px] p-[30px] lg:py-[58px] lg:px-10"
        >
          <div className="flex flex-col gap-1">
            <input
              id="email"
              type="text"
              {...register("email", {
                required: true,
                minLength: {
                  value: 10,
                  message: "The email must be more than 10 symbols",
                },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              className="text-white lg:text-lg bg-[#292A32] border border-white rounded-[14px] px-[25px] py-[21px] placeholder:text-white"
              placeholder="Email"
            />
            {errors.email && (
              <span className="text-red-600 font-medium">
                {errors.email.message}
              </span>
            )}
          </div>
          <button className="bg-green text-[20px] rounded-[14px] cursor-pointer px-[35px] py-[20px] transition-all duration-300 hover:-translate-y-1 active:translate-y-1">
            Subscribe to news
          </button>
        </form>
      </div>
      <div className="lg:hidden">
        <MySocialNetworks />
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-10 lg:col-span-3 items-center gap-[15px] pt-[37px] border-t border-t-[#FFF] lg:pt-[50px]">
        <span className="text-white lg:text-lg">
          @2023 streamvib, All Rights Reserved
        </span>
        <span className="text-white lg:text-lg lg:underline cursor-pointer">
          Privacy Policy
        </span>
      </div>
    </footer>
  );
};

export default Footer;
